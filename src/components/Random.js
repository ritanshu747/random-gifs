import React from 'react';
import Spinner from './Spinner';
import UseGif from "./UseGif";

export default function Random() {
  const { gif, loading, fetchData } = UseGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width='450' alt='Random GIF' />}
      <button className='mb-[20px] w-9/12 rounded-lg bg-white py-2' onClick={fetchData}>
        Generate
      </button>
    </div>
  );
}
