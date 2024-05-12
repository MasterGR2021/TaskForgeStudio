'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { LuMoreHorizontal } from 'react-icons/lu';

import { Skeleton } from '@/components/ui/skeleton';

import { Actions } from '@/components/actions';
import { Overlay } from './overlay';

import { useAuth } from '@clerk/nextjs';
import { Footer } from './footer';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  isFavorite,
  orgId,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnFavorite } = useApiMutation(
    api.board.unFavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => toast.error('Failed to unfavorite'));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error('Failed to favorite'));
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className='group aspect-[100/110] border rounded-lg flex flex-col justify-between overflow-hidden'>
        <div className='relative flex-1 bg-amber-50'>
          <Image
            src={imageUrl}
            alt='cover doodles'
            fill
            className='object-bottom'
          />
          <Overlay />
          <Actions id={id} title={title} side='right'>
            <button className='absolute top-1 right-1 opacity-0 group-hover:opacity-100'>
              <LuMoreHorizontal className='text-white opacity-75 hover:opacity-100 transition-opacity' />
            </button>
          </Actions>
        </div>
        <Footer
          title={title}
          isFavorite={isFavorite}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnFavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className='group aspect-[100/110] border rounded-lg flex flex-col justify-between overflow-hidden'>
      <Skeleton className='h-full w-full' />
    </div>
  );
};
