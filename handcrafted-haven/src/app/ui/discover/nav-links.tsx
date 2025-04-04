'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Discover', href: '/discover', title: 'Discover' },
  { name: 'My workspace', href: '/account', title: 'User account' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <li
            key={link.name}
            className={clsx(
              'bg-background hover:bg-container-1 rounded-[10px]',
              {
                'bg-tertiary hover:bg-primary': pathname === link.href,
              }
            )}
          >
            <Link
              href={link.href}
              className={clsx('flex py-[12px] px-[25px]', {
                'text-[#fff]': pathname === link.href,
              })}
              title={link.title}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
