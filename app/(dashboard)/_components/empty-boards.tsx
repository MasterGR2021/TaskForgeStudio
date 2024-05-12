'use client';

import { Button } from '@/components/ui/button';
import { LuClipboardList } from 'react-icons/lu';

import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success('Board Created');
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error('Failed to create board'));
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <LuClipboardList className='w-10 h-10 ' />
      <h2 className='text-2xl font-semibold mt-6'>Create your first board!</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Try creating a brand new board...
      </p>
      <Button onClick={onClick} className='mt-6' disabled={pending}>
        Create Board
      </Button>
    </div>
  );
};
