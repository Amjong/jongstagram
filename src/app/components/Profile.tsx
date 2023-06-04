import Image from 'next/image';

export default function Profile({
  imageSource,
  width,
  height,
}: {
  imageSource: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      className='rounded-full'
      src={imageSource}
      width={width}
      height={height}
      priority
    ></Image>
  );
}
