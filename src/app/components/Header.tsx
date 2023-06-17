import React from 'react';
import LoginButton from './LoginButton';
import Profile from './Profile';
import Link from 'next/link';
import { getUserSession } from '../service/session';
import NavIcons from './NavIcons';

export default async function Header() {
  const session = await getUserSession();
  const text = session ? 'Sign out' : 'Sign in';
  return (
    <div className='sticky flex justify-between m-1 border-b-2 border-gray-100'>
      <h1 className='text-3xl font-bold mt-2 ml-1'>
        <Link href='/'>Jongstagram</Link>
      </h1>
      <div className='flex space-x-4 text-2xl m-3 items-center'>
        <NavIcons></NavIcons>
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
