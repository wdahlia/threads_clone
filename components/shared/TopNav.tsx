"use client"

import React, { useState } from 'react';
import ThreadsLogo from "../../public/logo/threads_logo.svg";
import MenuIcon from "../../public/icons/menu.svg";
import { dropDownMenus, navigationLists } from '../../constants/consts';
import { DropDown } from '@/components/uis';
import { nanoid } from '@/node_modules/nanoid/index';
import { useRecoilValue } from 'recoil';
import { dropDownStore } from '@/store/dropdown/index';
import DropDownBtn from '@/components/btns/DropDownBtn';
import { motion } from 'framer-motion';


export default function TopNav() {
  
  const isClicked : string = useRecoilValue(dropDownStore);

  return (
    <nav className='sticky top-0 dark:bg-dark-nav-bg bg-light-nav-bg backdrop-blur-[28.5px] z-[9999] dark:text-dark-txt light-txt w-full h-top_nav mobile:h-top_mobile_nav flex items-center justify-around'>
      <div className='mobile:block hidden w-[40px] h-[40px]'></div>
      <button className='mobile:flex-grow'>
        <ThreadsLogo width="32" height="32" className="mx-auto dark:fill-dark-txt light-txt hover:scale-110 ease-out hover:ease-in duration-300"/>
      </button>
      <div className="min-w-navi_icons mobile:hidden">
        <ul className='grid grid-cols-5 items-center'>
          { navigationLists.map((navi, idx) => {
            return (
              <motion.li whileTap={{ scale : 0.9 }} key={nanoid()} className="h-top_nav dark:hover:bg-dark-icon-hover hover:bg-light-icon-hover hover:rounded-[10px] px-[30px] m-[5px] py-[20px] flex items-center">
                <button>{navi.icon}</button>
              </motion.li>
            )
          })}
        </ul>
      </div>
      {/* Menu Button */}
      <div className="relative"> 
        <DropDownBtn name="HEADER">
          <MenuIcon width="23" height="23" className={`dark:fill-dark-navicon fill-light-navicon mobile:mr-[25px] mt-[8px] dark:hover:fill-dark-txt hover:fill-light-txt ${ isClicked && 'dark:fill-dark-txt fill-light-txt' }`} />
        </DropDownBtn>
        { isClicked === 'HEADER' && <DropDown content={dropDownMenus?.header} /> }
      </div>
    </nav>
  );
}

