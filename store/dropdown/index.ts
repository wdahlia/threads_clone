import { selectorFamily, atom } from 'recoil';
import { Menus } from '@/types/index';

export const dropDownStore = atom<Menus>({
  key: "dropDownStore",
  default: null
});