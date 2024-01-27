"use client"
import { dropDownMenus, threadContentIcons } from '@/constants/consts';
import { nanoid } from '@/node_modules/nanoid/index';
import Image from 'next/image';
import React, { useState } from 'react';
import AddBtn from '../../public/icons/add_btn.svg';
import ThreadDetailBtn from '../../public/icons/meatballs_menu.svg';
import DropDown from '../ui/DropDown';


type IsClickedState = Record<string, boolean>;

export default function ThreadCard() {

  const [isClicked, setIsClicked] = useState<IsClickedState>({
    'header': false,
    'repost': false,
    'send': false,
  });


  // dummyData
  const threadData : {
    userId : string,
    createdTime : number,
    content : string,
    ImgUrl? : Array<string>,
    commentNum? : number,
  } = {
    userId : 'karinaa.aespa',
    createdTime : 23,
    content : '12월은 설렘의 계절이야🎄', 
    ImgUrl : ['/profile_ex.jpeg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg'],
    commentNum: 120,
  }

  const handleMenuClick = (name : string) => {
    setIsClicked((prev) => ({ ...prev, [name] : !isClicked[name] }));
  }


  return (
    <>
      <article className="max-w-full h-auto flex gap-x-[13px] mobile:gap-x-[10px] mobile:mt-[20px]">
        {/* threads card profile img & vertical line */}
        <div className="flex flex-col w-[36px] gap-y-[10px] mt-[15px]">
          <div className='w-full h-[36px] rounded-[50%] relative cursor-pointer'>
            <Image src={'/profile_ex.jpeg'} width={36} height={36} className="rounded-[50%] max-w-none" />
            <button className='absolute left-[23px] -bottom-[5px] hover:scale-110 hover:ease-in duration-300'><AddBtn className="w-[20px] h-[20px] dark:fill-[#FFFFFF] fill-[#101010] dark:stroke-[#101010] stroke-[#FFFFFF]" /></button>
          </div>
          <div className='grow dark:bg-dark-hr bg-light-hr w-[2px] rounded-[20px] h-[100px] mx-auto'></div>
        </div>
        <div className='flex flex-col'>
          {/* threads card header */}
          <div className="flex-initial flex justify-between items-center">
            <p className="dark:text-[#FFFFFF] text-[#101010] text-[15px] font-medium hover:underline cursor-pointer">
              { threadData?.userId }
            </p>
            <div className='flex items-center'>
              <p className='dark:text-dark-navicon text-light-navicon justify-self-center tracking-[-0.18px]'>{threadData?.createdTime}시간</p>
              <button className='ml-[5px] p-[8px] rounded-[50%] hover:dark:bg-dark-icon-hover hover:bg-light-icon-hover' onClick={() => handleMenuClick('header')}><ThreadDetailBtn className="w-[20px] h-[20px] dark:stroke-[#FFFFFF] stroke-[#101010]"/></button>
              { isClicked['header'] && <DropDown content={dropDownMenus.threadHeader} popup header /> }
            </div>
          </div>
          {/* threads content */}
          <p className='flex-initial dark:text-[#FFFFFF] text-[#000000] break-words break-keep font-regular text-[15px]'>
            { threadData?.content }
          </p>
          {/* threads Images carousel */}
          <div className="flex-initial w-full mt-[10px]">
            <div className='flex gap-x-[10px] w-full relative overflow-x-scroll'>
              { threadData?.ImgUrl?.map((url, idx) => {
                // ImgUrl의 array 길이가 1개이면, w-full
                return (
                  <picture key={nanoid()} className='contentImg h-auto shrink-0 w-[50%] overflow-hidden'>
                    <img src={url} alt="" className='feedImg object-contain max-w-full block rounded-[8px] -outline-offset-[1px]'/>
                  </picture>
                )
              })}
            </div>
          </div>
          {/* threads Icons Area */}
          <div className="mt-[10px]">
            <ul className="flex relative -left-[7px]">
              { threadContentIcons.map((item, idx) => {
                return (
                  <div key={nanoid()} className='relative'>
                    <button className='hover:dark:bg-dark-icon-hover hover:bg-light-icon-hover p-[5px] rounded-[50%]' onClick={() => handleMenuClick(item?.name)}>{item.icon}</button>
                    { isClicked[item?.name] && <DropDown content={item.name === 'repost' ? dropDownMenus.threadRepost : dropDownMenus.threadSend } popup repost={item?.name === 'repost'} /> }
                    {/* thread card 내부에서 content으로 prop 받아오는데 item.name 삼항연산자 사용하면서 그 외의 값 null로도 또 보내줘서 popup이 두개 생성되는 오류 존재했었음 */}
                  </div>
                )
              })}
            </ul>
          </div>
          {/* threads Comment Area */}
          <div className='flex gap-x-[5px] dark:text-dark-navicon text-light-navicon text-[15px] mt-[10px] font-regular'>
            <button className={`${ threadData?.commentNum ? 'block' : 'hidden' } hover:underline`}><p>답글 {threadData?.commentNum}개</p></button>
            <span className={` ${ threadData?.commentNum ? 'block' : 'hidden' } `}>·</span>
            <button className={`hover:underline`}><span>활동 보기</span></button>
          </div>
        </div>
      </article>
      <div className='h-[1px] dark:bg-dark-hr bg-light-hr mt-[15px] mb-[10px] w-full mobile:absolute mobile:left-0 opacity-[0.5] last:hidden' />
    </>
  );
}

