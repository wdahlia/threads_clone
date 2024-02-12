import { useRecoilState } from 'recoil';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { dropDownStore } from '@/store/dropdown/index';


interface Props {
  children : ReactNode,
  btnClass? : string,
  name : string,
  disabled? : boolean,
}
export default function DropDownBtn({ children, btnClass, name, disabled } : Props ) {

  const [isClicked, setIsClicked] = useRecoilState(dropDownStore);


  const handleMenuClick = (name: string) => {
    setIsClicked(name);
  }

  return (
    <motion.button 
      whileTap={{ scale : 0.9 }} 
      className={btnClass} 
      onClick={() => handleMenuClick(name)}
      disabled={disabled}
    >
      { children }
    </motion.button>
  );
}

