import { LuLoader } from 'react-icons/lu';
import { InfoSkeleton } from './info';
import { ParticipantsSkeleton } from './participants';
import { ToolbarSkeleton } from './toolbar';

export const Loading = () => {
  return (
    <main className='min-h-[100vh] h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center'>
      <LuLoader className='h-6 w-6 text-muted-foreground animate-spin' />
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
