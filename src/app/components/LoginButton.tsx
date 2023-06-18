'use client';
import { signIn, signOut } from 'next-auth/react';

type props = {
  text: string;
  session: any;
};

export default function LoginButton({ text, session }: props) {
  const signFunc = () => {
    if (session) {
      signOut();
      return;
    }
    signIn();
  };
  return (
    <div className='rounded-lg bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]'>
      <button
        className='bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity'
        onClick={() => signFunc()}
      >
        {text}
      </button>
    </div>
  );
}
