'use client';
import { useSession } from 'next-auth/react';
import LoginButton from './components/LoginButton';
import Post from './components/post';
export default function Home() {
  const { data: session } = useSession();
  return (
    <main className='flex flex-col items-center'>
      <div className='mt-20'>
        {session ? (
          <Post></Post>
        ) : (
          <LoginButton text='Sign in with Google'></LoginButton>
        )}
        {/* {session && <Post></Post>}
        {!session && <LoginButton text='Sign in with Google'></LoginButton>} */}
      </div>
    </main>
  );
}
