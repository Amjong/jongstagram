import React from 'react';
import { BsPlusSquare, BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import LoginButton from './LoginButton';

export default function Header() {
  return (
    <div className='flex justify-between m-1 border-b-2 border-gray-100'>
      <h1 className='text-3xl font-bold mt-2 ml-1'>Jongstagram</h1>
      <div className='flex space-x-4 text-2xl m-3 items-center'>
        <AiOutlineHome></AiOutlineHome>
        <BsSearch></BsSearch>
        <BsPlusSquare></BsPlusSquare>
        <LoginButton text={'Sign in'}></LoginButton>
      </div>
    </div>
  );
}
