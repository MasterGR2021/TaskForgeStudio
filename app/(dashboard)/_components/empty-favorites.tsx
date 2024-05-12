import { FaHeartCircleExclamation } from 'react-icons/fa6';

export const EmptyFavorites = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <FaHeartCircleExclamation className='w-10 h-10 ' />
      <h2 className='text-2xl font-semibold mt-6'>No Favorite Boards.</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        Try to add a Board to favorites...
      </p>
    </div>
  );
};
