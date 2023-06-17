import useSWR from 'swr';
import { client } from '../../../sanity/lib/client';

import post from '../../../sanity/schemas/post';

export default async function fetchClient(): Promise<any> {
  const posts = await client.fetch(
    '*[_type == "post"] {photo, comments, author, likes}'
  );
  return posts;
}

// export default function useClient() {
//   const { data, error, isLoading } = useSWR('*[_type == "post"]', client.fetch);
//   console.log(data);
//   return {
//     post: data,
//     error,
//     isLoading,
//   };
// }
