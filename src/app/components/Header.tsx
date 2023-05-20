import React from 'react';
import { BsPlusSquare, BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';

export default function Header() {
  return (
    <div className='flex'>
      <h1>Jongstagram</h1>
      <AiOutlineHome></AiOutlineHome>
      <BsPlusSquare></BsPlusSquare>
      <BsSearch></BsSearch>
    </div>
  );
}
