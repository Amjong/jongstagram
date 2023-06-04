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
    <button
      className='rounded-lg border-2 border-pink-300 text-2xl p-1'
      onClick={() => signFunc()}
    >
      {text}
    </button>
  );
}
