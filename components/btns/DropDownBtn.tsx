import { useRecoilState } from 'recoil';
import { Menus } from '@/types/index';
import React, { ReactNode, useEffect, useRef } from 'react';
import { dropDownStore } from '@/store/dropdown/index';


interface Props {
  children : ReactNode,
  btnClass : string,
  name : string,
}
export default function DropDownBtn({ children, btnClass, name } : Props ) {

  const [isClicked, setIsClicked] = useRecoilState(dropDownStore);


  const handleMenuClick = (name: string) => {
    setIsClicked(name);
  }

  return (
    <button className={btnClass} onClick={() => handleMenuClick(name)}>
      { children }
    </button>
  );
}

