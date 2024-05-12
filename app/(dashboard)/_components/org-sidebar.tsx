'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutIcon, StarIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');

  return (
    <div className='hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5'>
      <Link href='/'>
        <div className='flex items-center gap-x-2'>
          <Image src='/logo.svg' alt='Logo' height={60} width={60} />
          <span className={cn('font-semiBold text-2xl', font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
            organizationSwitcherTrigger: {
              width: '100%',
              minWidth: '180px',
              padding: '6px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'white',
            },
          },
        }}
      />
      <div className='w-full'>
        <Button
          asChild
          size='lg'
          variant={favorites ? 'ghost' : 'secondary'}
          className='font-normal justify-start p-x-2 w-full'
        >
          <Link href='/'>
            <LayoutIcon className='w-4 h-4 mr-2' />
            Team Boards
          </Link>
        </Button>
        <Button
          asChild
          size='lg'
          variant={favorites ? 'secondary' : 'ghost'}
          className='font-normal justify-start p-x-2 w-full'
        >
          <Link
            href={{
              pathname: '/',
              query: { favorites: true },
            }}
          >
            <StarIcon className='w-4 h-4 mr-2' />
            Favorites
          </Link>
        </Button>
      </div>
    </div>
  );
};
