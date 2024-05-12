'use client';

import { PlusIcon } from '@radix-ui/react-icons';
import { CreateOrganization } from '@clerk/nextjs';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Hint } from '@/components/hint';

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hint
            label='Create Organization'
            side='right'
            align='start'
            sideOffset={10}
          >
            <button className='text-white bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
              <PlusIcon className='w-5 h-5' />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent>
        <CreateOrganization
          routing='hash'
          skipInvitationScreen={true}
          appearance={{
            elements: {
              cardBox: {
                boxShadow: 'none',
                border: 'none',
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
