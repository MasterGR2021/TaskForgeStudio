import { CrumpledPaperIcon } from '@radix-ui/react-icons';
import { CreateOrganization } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <CrumpledPaperIcon className='w-6 h-6' />
      <h2 className='text-2xl font-semibold mt-6'>Welcome to Board</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Create an organization to get started
      </p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>Create Organization</Button>
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
      </div>
    </div>
  );
};
