'use client';

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { SearchInput } from './search-input';
import { InviteButton } from './invite-button';

export const Navbar = () => {
  return (
    <div className='flex items-center gap-x-4 p-5'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <div className='block lg:hidden flex-1'>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                width: '100%',
                display: 'flex',
                maxWidth: '376px',
                alignItems: 'center',
                justifyContent: 'center',
              },
              organizationSwitcherTrigger: {
                width: '100%',
                padding: '6px',
                display: 'flex',
                minWidth: '180px',
                borderRadius: '8px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                justifyContent: 'space-between',
              },
            },
          }}
        />
      </div>
      <InviteButton />
      <UserButton />
    </div>
  );
};
