'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'convex/react';
import { Poppins } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';
import { Hint } from '@/components/hint';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useRenameModal } from '@/store/use-rename-modal';
import { Actions } from '@/components/actions';
import { LuMenu } from 'react-icons/lu';

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const TabSeperator = () => {
  return <div className='text-neutral-300 px-1.5'>|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-sm'>
      <Hint label='Go to boards'>
        <Button asChild variant='board' className='px-2'>
          <Link href='/'>
            <Image src='/logo.png' alt='logo' height={40} width={40} />
            <span
              className={cn(
                'font-semibold text-xl ml-2 text-black',
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint label='Edit title'>
        <Button
          variant='board'
          className='text-base font-normal px-2'
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions side='bottom' id={data._id} title={data.title} sideOffset={10}>
        <div>
          <Hint label='Main menu' side='bottom' sideOffset={10}>
            <Button size='icon' variant='board'>
              <LuMenu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className='absolute top-2 left-2 w-[300px] bg-white rounded-md  h-12 flex items-center shadow-sm'>
      <Skeleton className='h-full w-full bg-muted-foreground' />
    </div>
  );
};
