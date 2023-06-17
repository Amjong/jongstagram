'use client';

// import useClient from '../service/fetcher';
import fetchClient from '../service/fetcher';
import { useEffect } from 'react';

export default async function Post() {
  const posts = await fetchClient();
  return <div>{posts && JSON.stringify(posts)}</div>;
}
