'use client';

import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { cn } from '@/lib/utils';
import { PlusIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface NewButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success('Board created');
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error('Failed to create board'));
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        'col-span-1 aspect-[100/110] bg-blue-600 rounded-lg hover:bg-blue-800 items-center justify-center py-6',
        (disabled || pending) &&
          'opacity-75 hover:bg-blue-600 cursor-not-allowed'
      )}
    >
      <div className='flex flex-col items-center'>
        <PlusIcon className='h-5 w-5 text-white stroke-1' />
        <p className='text-sm text-white font-light mt-2'> New Board</p>
      </div>
    </button>
  );
};
