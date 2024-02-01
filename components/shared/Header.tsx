"use client"
import React from 'react';
import { RecoilRoot } from 'recoil';
import TopNav from './TopNav';

export default function Header() {
  return (
    <RecoilRoot>
      <TopNav />
    </RecoilRoot>
  );
}

