import { threadContentIcons } from '@/constants/consts';
import Image from 'next/image';
import React from 'react';
import AddBtn from '../../public/icons/add_btn.svg';
import ThreadDetailBtn from '../../public/icons/meatballs_menu.svg';

export default function ThreadCard() {

  // dummyData
  const threadData : {
    userId : string,
    createdTime : number,
    content : string,
    ImgUrl? : Array<String>,
  } = {
    userId : 'karinaa.aespa',
    createdTime : 23,
    content : '12월은 설렘의 계절이야🎄', 
    ImgUrl : ['/profile_ex.jpeg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg'],
  }
  
  return (
    <>
      <article className="max-w-full h-auto flex gap-x-[20px] mobile:gap-x-[10px] mt-[20px]">
        {/* threads card profile img & vertical line */}
        <div className="flex flex-col w-[36px] gap-y-[10px] mr-[5px] mt-[15px]">
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
              <button className='ml-[5px] p-[8px] rounded-[50%] hover:dark:bg-dark-icon-hover hover:bg-light-icon-hover'><ThreadDetailBtn className="w-[20px] h-[20px] dark:stroke-[#FFFFFF] stroke-[#101010]"/></button>
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
                  <picture key={idx} className='contentImg h-auto shrink-0 w-[50%] overflow-hidden'>
                    <img src={url} alt="" className='feedImg object-contain max-w-full block rounded-[8px] -outline-offset-[1px]'/>
                  </picture>
                )
              })}
            </div>
          </div>
          {/* threads Icons Area */}
          <div className="mt-[10px]">
            <ul className="flex">
              { threadContentIcons.map((item, idx) => <button key={idx} className='hover:dark:bg-dark-icon-hover hover:bg-light-icon-hover p-[5px] rounded-[50%]'>{item.icon}</button>) }
            </ul>
          </div>
        </div>
      </article>
      <div className='h-[1px] dark:bg-dark-hr bg-light-hr w-full my-[10px] absolute left-0' />
    </>
  );
}

