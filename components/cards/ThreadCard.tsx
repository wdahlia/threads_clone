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
    content : '아침 루틴대로 환기를 위해 창을 열고 전기주전자로 물을 끓이다가 냉기에 깜짝 놀랐다. 그래서 오늘은 10년이상된 보이차로 몸을 데운다.', 
    ImgUrl : ['/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg', '/ex_threadImg.jpg'],
  }
  
  return (
    <article className="max-w-full h-auto flex gap-x-[20px] mt-[10px]">
      {/* threads card profile img & vertical line */}
      <div className="flex flex-col w-[36px] gap-y-[10px] mr-[5px]">
        <div className='w-full h-[36px] rounded-[50%] relative cursor-pointer'>
          <Image src={'/profile_ex.jpeg'} width={36} height={36} className="rounded-[50%] max-w-none" />
          <button className='absolute left-[23px] -bottom-[5px] hover:scale-110 hover:ease-in duration-300'><AddBtn className="w-[20px] h-[20px] dark:fill-[#FFFFFF] fill-[#101010] dark:stroke-[#101010] stroke-[#FFFFFF]" /></button>
        </div>
        <div className='grow dark:bg-dark-hr bg-light-hr w-[2px] rounded-[20px] h-[100px] mx-auto'></div>
      </div>
      <div className='flex flex-col w-full gap-y-[8px]'>
        {/* threads card header */}
        <div className="flex justify-between items-center">
          <p className="dark:text-[#FFFFFF] text-[#101010] text-[15px] font-medium hover:underline cursor-pointer">
            { threadData?.userId }
          </p>
          <div className='flex items-center'>
            <p className='dark:text-dark-navicon text-light-navicon justify-self-center tracking-[-0.18px]'>{threadData?.createdTime}시간</p>
            <button className='ml-[5px] p-[8px] rounded-[50%] hover:dark:bg-dark-icon-hover hover:bg-light-icon-hover'><ThreadDetailBtn className="w-[20px] h-[20px] dark:stroke-[#FFFFFF] stroke-[#101010]"/></button>
          </div>
        </div>
        {/* threads content */}
        <p className='dark:text-[#FFFFFF] text-[#000000] break-words break-keep'>
          { threadData?.content }
        </p>
        {/* threads Images carousel */}
        <div className="min-w-full h-auto">
          <div className='flex gap-x-[20px] w-full overflow-x-auto'>
            { threadData?.ImgUrl?.map((url, idx) => {
              return (
                <div key={idx} className='object-contain relative contentImg h-auto' style={{ width: `calc(100% / ${threadData?.ImgUrl?.length})` }}>
                  <Image src={url} fill className="feedImg"/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

