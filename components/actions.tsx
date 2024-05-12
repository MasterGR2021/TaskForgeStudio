'use client';

import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';
import { LuLink, LuPencil, LuTrash2 } from 'react-icons/lu';
import { toast } from 'sonner';

import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { ConfirmModal } from './confirm-modal';
import { Button } from './ui/button';
import { useRenameModal } from '@/store/use-rename-modal';

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset'];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  id,
  title,
  side,
  sideOffset,
}: ActionsProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link Copied'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success('Board Deleted'))
      .catch(() => toast.error('Failed to delete board'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        className='w-60'
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem
          onClick={onCopyLink}
          className='p-3 cursor-pointer w-full justify-start text-sm font-normal'
        >
          <LuLink className='h-4 w-4 mr-2' />
          Copy board link
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className='p-3 cursor-pointer w-full justify-start text-sm font-normal'
        >
          <LuPencil className='h-4 w-4 mr-2' />
          Rename Board
        </DropdownMenuItem>

        <ConfirmModal
          header='Delete Board'
          description='This will delete the board and all its contents.'
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            size='lg'
            variant='ghost'
            className='p-3 cursor-pointer w-full justify-start text-sm font-normal'
          >
            <LuTrash2 className='h-4 w-4 mr-2' />
            Delete Board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
