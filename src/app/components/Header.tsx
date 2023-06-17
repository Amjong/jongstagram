import React from 'react';
import { BsPlusSquare, BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import LoginButton from './LoginButton';
import { getUserSession } from '../service/session';
import Profile from './Profile';
import Link from 'next/link';

export default async function Header() {
  const session = await getUserSession();
  const text = session ? 'Sign out' : 'Sign in';
  return (
    <div className='flex justify-between m-1 border-b-2 border-gray-100'>
      <h1 className='text-3xl font-bold mt-2 ml-1'>
        <Link href='/'>Jongstagram</Link>
      </h1>
      <div className='flex space-x-4 text-2xl m-3 items-center'>
        <Link href='/'>
          <AiOutlineHome></AiOutlineHome>
        </Link>
        <Link href='/search'>
          <BsSearch></BsSearch>
        </Link>
        <Link href='/new'>
          <BsPlusSquare></BsPlusSquare>
        </Link>

        {session && (
          <Profile
            imageSource={session?.user?.image as string}
            width={50}
            height={50}
          ></Profile>
        )}
        <LoginButton text={text} session={session}></LoginButton>
      </div>
    </div>
  );
}
