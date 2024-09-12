import React from 'react';
import { OrbitProgress } from 'react-loading-indicators'
import './index.css';

function Loading() {
  return (
    <>
      <div class="overflow-x-hidden table text-center overflow-y-hidden min-h-screen h-full w-full bg-gradient-to-t from-[#004e71] to-orange-500">
        <div class="main flex items-center justify-center min-h-screen">
          <OrbitProgress dense color="#000000" size="large" text="" textColor="" />
        </div>
      </div>
    </>
  );
}

export default Loading;