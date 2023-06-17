import { isLabeledStatement } from 'typescript';
import LoginButton from './components/LoginButton';
import { getUserSession } from './service/session';
import Post from './components/post';
export default async function Home() {
  const session = await getUserSession();
  return (
    <main className='flex flex-col items-center'>
      <div className='mt-20'>
        {session && <Post></Post>}
        {!session && (
          <LoginButton
            text='Sign in with Google'
            session={session}
          ></LoginButton>
        )}
      </div>
    </main>
  );
}
