import { nanoid } from '@/node_modules/nanoid/index';
import React from 'react';
import { navigationLists } from '../../constants/consts';

export default function BottomNav() {
  return (
    <nav className='mobile:block hidden fixed bottom-0 left-0 mx-auto dark:bg-dark-nav-bg bg-light-nav-bg backdrop-blur-[28.5px] z-[9999] dark:text-dark-txt text-light-txt w-full h-btm-nav'>
      <ul className='flex items-center w-full justify-center'>
        { navigationLists.map((navi, idx) => {
          return (
            <li key={nanoid()} className="h-btm_nav dark:hover:bg-dark-icon-hover hover:bg-light-mobile-icon-hover hover:rounded-[10px] px-[35px] py-[20px] flex items-center justify-center" style={{ width: "calc(100% / 5)"}}>
              <button>{navi.icon}</button>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

