import React, { useState } from 'react';
import Spinner from './Spinner';
import UseGif from './UseGif';

export default function Tag() {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = UseGif({tag});

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width='450' alt='Random GIF' />}
      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[20px] text-cneter'
        type='text'
        placeholder='Search your GIFS'
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />
      <button className='mb-[20px] w-9/12 rounded-lg bg-white py-2' onClick={fetchData}>
        Generate
      </button>
    </div>
  );
}
