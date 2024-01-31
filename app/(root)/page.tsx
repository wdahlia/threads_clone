"use client"

import ThreadCard from '@/components/cards/ThreadCard';
import { RecoilRoot } from 'recoil';
import React from 'react';

export default function MainPage() {
  return (
    <RecoilRoot>
      <div className='last:pb-[200px]'>
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </div>
    </RecoilRoot>
  );
}

