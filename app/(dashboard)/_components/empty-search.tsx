import { FaGhost } from 'react-icons/fa';

export const EmptySearch = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <FaGhost className='w-10 h-10 ' />
      <h2 className='text-2xl font-semibold mt-6'>No Results Found.</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Try Searching for something else...
      </p>
    </div>
  );
};
