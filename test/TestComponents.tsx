import { nanoid } from '@/node_modules/nanoid/index';
import React from 'react';

export default function TestComponents() {

  const listNames : Array<string> = ["모드 전환", "설정", "정보"];
  
  return (
    <>
      {/* 팔로우 버튼 스타일링 테스트 */}
      <div className="flex p-[20px]">
      <button className="w-[104px] h-[34px] leading-[80%] text-[15px] font-semibold text-light-txt dark:text-dark-txt rounded-[10px] border-[1px] border-light-btn-brd dark:border-dark-btn-brd bg-inherit">팔로우</button>
      </div>
      {/* 게시 버튼 스타일링 테스트 */}
      <div className="flex p-[20px]">
      <button className="min-w-[58px] h-[36px] leading-[80%] text-[15px] font-semibold text-light-post-txt dark:text-dark-post-txt rounded-[80px] dark:border-dark-btn-brd bg-light-btn-brd dark:bg-dark-btn-brd">게시</button>
      </div>
      {/* 리스트, input Box shadow 스타일링 테스트*/}
      <div className="text-[15px] dark:text-dark-txt text-light-txt font-normal dark:bg-dark-list-bg w-[174px] rounded-[15px] m-[20px] shadow-box dark:border-dark-hr">
        <ul className="">
          { listNames.map((list, idx) => <li key={nanoid()} className="border-b-light-hr dark:border-b-dark-hr py-[10px] border-b-[1px] last:border-b-0 first:pt-[15px] last:pb-[15px] indent-[20px]">{list}</li>)}
        </ul>
      </div>
    </>
  );
}

