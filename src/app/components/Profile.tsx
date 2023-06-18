'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      {session && (
        <Image
          className='rounded-full'
          src={session.user?.image}
          width='50'
          height='50'
          priority
        ></Image>
      )}
    </div>
  );
}
