import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <button className='rounded-lg border-2 border-pink-300 text-2xl mt-20 p-1'>
        Sign in with Google
      </button>
    </main>
  );
}
