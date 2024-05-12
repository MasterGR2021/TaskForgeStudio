import { PlusIcon } from '@radix-ui/react-icons';
import { OrganizationProfile } from '@clerk/nextjs';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>
          <PlusIcon className='h-4 w-4 mr-2' />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 bg-transparent border-none max-w-[880px] max-h-[80vh] overflow-y-scroll'>
        <OrganizationProfile
          routing='hash'
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
