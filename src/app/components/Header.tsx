import LoginButton from './LoginButton';
import Profile from './Profile';
import Link from 'next/link';
import NavIcons from './NavIcons';

export default async function Header() {
  return (
    <div className='sticky top-0 z-10 flex justify-between m-1 border-b-2 border-gray-100'>
      <h1 className='text-3xl font-bold mt-2 ml-1'>
        <Link href='/'>Jongstagram</Link>
      </h1>
      <div className='flex space-x-4 text-2xl m-3 items-center'>
        <NavIcons></NavIcons>
        <Profile></Profile>
        <LoginButton></LoginButton>
      </div>
    </div>
  );
}
