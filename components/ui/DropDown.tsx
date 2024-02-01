import { nanoid } from '@/node_modules/nanoid/index';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { dropDownStore } from '@/store/dropdown/index';

interface Props {
  content : string[] | string[][],
  popup? : boolean,
  header? : boolean,
  repost? : boolean,
}

export default function DropDown({ content, popup, header, repost } : Props ) {
  
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useRecoilState(dropDownStore);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleResize = debounce(() => {
    setScreenSize(window.innerWidth);
    // screen resize 이벤트가 감지되면, 화면이 조절된 후 (즉 이벤트가 끝난 후) 1초 뒤에 setScreenSize에 상태 업데이트
    // 화면 조정시 이벤트가 발생할떄마다 컴포넌트가 리렌더링 되면 문제 존재할 수 있음 이를 해결하기 위함
  }, 1000)

  const handleClickedOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setIsClicked(null);
    }
  }
  
  useEffect(() => {

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickedOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickedOutside);
    }
  }, [])

  // 조건 mobile 일 때, threadCard 내부 컴포넌트는 모두 밑에서 올라오는 list 값
  return (
    <>
      { screenSize < 670 && popup ?
        <>
          <div className='fixed w-full h-full top-0 left-0 z-[99998] bg-[#000000] opacity-15 overflow-hidden'></div>
          <div ref={dropDownRef} className='fixed z-[99999] left-0 bottom-0 w-full dark:bg-dark-bg bg-light-bg rounded-t-[20px] border border-b-0 dark:border-dark-hr border-light-hr min-h-[120px] shadow-popup'>
            <ul className={`flex flex-col m-[20px] ${ header ? "gap-y-[20px]" : repost ? "gap-y-[20px]" : "bg-light-dropdown-bg dark:bg-dark-dropdown-bg rounded-[15px]" } dark:text-dark-txt text-light-txt font-medium`}>
              { content?.map((item, idx) => 
                  typeof(item) === 'object' 
                  ? 
                    <div key={nanoid()} className="dark:bg-dark-dropdown-bg bg-light-dropdown-bg rounded-[15px]">
                      { item?.map((sec, i) => 
                        <li key={nanoid()} className={`border-b-light-hr dark:border-b-dark-hr py-[15px] last:border-b-0 border-b-[1px] first:pt-[15px] last:pb-[15px] ${ !header ? "" : "last:text-[#FF3040]" } indent-[20px] cursor-pointer active:dark:bg-dark-bg active:bg-light-bg font-medium text-[15px]`}>
                          {sec}
                        </li> 
                      )}
                    </div>
                  : 
                    <li key={nanoid()} className="border-b-light-hr dark:border-b-dark-hr border-b-[1px] last:border-b-0 py-[15px] indent-[20px] cursor-pointer active:dark:bg-dark-bg active:bg-light-bg font-medium text-[15px]">{item}</li>
              )}
            </ul>
          </div>
        </>
        :
        <div ref={dropDownRef} className={`absolute z-[999] mobile:-right-[10px] -right-[30px] top-[20px] text-[15px] dark:text-dark-txt text-light-txt font-normal dark:bg-dark-list-bg bg-light-list-bg w-[174px] rounded-[15px] m-[20px] shadow-box dark:border-dark-hr`}>
          <ul>
            { content.flat().map((list, idx) => <li key={nanoid()} className={`${ content.flat().length > 2 && idx % 2 && "text-[#FF3040]" } border-b-light-hr dark:border-b-dark-hr py-[10px] border-b-[1px] last:border-b-0 first:pt-[15px] last:pb-[15px] indent-[20px] cursor-pointer active:dark:bg-dark-bg active:bg-light-bg font-medium text-[15px]`}>{list}</li>) }
          </ul>
        </div>
      }
    </>
  );
}


// 이중배열 활용, flat().map 사용하여 table/pc 화면에서는 해체하고 mobile의 경우는 threads 레이아웃처럼 구성할 예정
// tailwind의 사이즈 크기 변수로 활용할 수 있는 방법 찾아볼 것
// 아니라면 window사이즈 내부 크기로 구현하는 대신, debounce 사용할것, useEffect 사용 시, 의존성 배열에 window.innerWidth 포함하면 계속해서 리렌더링 발생
// 참고 링크 : https://velog.io/@so_scrumptious/debounce%EB%A1%9C-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0%EC%97%90-%EB%94%B0%EB%9D%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%8B%A4%EB%A5%B4%EA%B2%8C-%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0
