'use client';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menu = [
  {
    href: '/',
    icon: <HomeIcon></HomeIcon>,
    clickedIcon: <HomeFillIcon></HomeFillIcon>,
  },
  {
    href: '/search',
    icon: <SearchIcon></SearchIcon>,
    clickedIcon: <SearchFillIcon></SearchFillIcon>,
  },
  {
    href: '/new',
    icon: <NewIcon></NewIcon>,
    clickedIcon: <NewFillIcon></NewFillIcon>,
  },
];

export default function NavIcons() {
  const pathName = usePathname();
  return (
    <ul className='flex space-x-4 items-center'>
      {menu.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            {pathName === item.href ? item.clickedIcon : item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
