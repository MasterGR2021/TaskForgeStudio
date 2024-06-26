'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useOthers, useSelf } from '@/liveblocks.config';
import { UserAvatar } from './user-avatar';
import { connectionToColor } from '@/lib/utils';

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
      <div className='flex gap-x-2'>
        {users.slice(0, MAX_SHOWN_OTHER_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              name={info?.name}
              key={connectionId}
              src={info?.picture}
              fallback={info?.name?.[0] || 'T'}
              borderColor={connectionToColor(connectionId)}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionToColor(currentUser.connectionId)}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md flex items-center shadow-md'>
      <Skeleton className='h-full bg-muted-foreground w-[100px]' />
    </div>
  );
};
