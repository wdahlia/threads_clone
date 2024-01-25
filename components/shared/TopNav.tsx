import React from 'react';
import ThreadsLogo from "../../public/logo/threads_logo.svg";
import MenuIcon from "../../public/icons/menu.svg";
import { navigationLists } from '../../constants/consts';

export default function TopNav() {
  return (
    <nav className='sticky top-0 dark:bg-dark-nav-bg bg-light-nav-bg backdrop-blur-[28.5px] z-[9999] dark:text-dark-txt light-txt w-full h-top_nav flex items-center justify-around'>
      <div className='mobile:block hidden w-[40px] h-[40px]'></div>
      <button className='mobile:flex-grow'>
        <ThreadsLogo width="32" height="32" className="mx-auto dark:fill-dark-txt light-txt hover:scale-110 ease-out hover:ease-in duration-300"/>
      </button>
      <div className="min-w-navi_icons mobile:hidden">
        <ul className='grid grid-cols-5 items-center'>
          { navigationLists.map((navi, idx) => {
            return (
              <li key={idx} className="h-top_nav dark:hover:bg-dark-icon-hover hover:bg-light-icon-hover hover:rounded-[10px] px-[30px] m-[5px] py-[20px] flex items-center">
                <button>{navi.icon}</button>
              </li>
            )
          })}
        </ul>
      </div>
      <button><MenuIcon width="25" height="25" className="dark:fill-dark-navicon fill-light-navicon mobile:mr-[25px] dark:hover:fill-dark-txt hover:fill-light-txt" /></button>
    </nav>
  );
}

