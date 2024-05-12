import Image from 'next/image';

export const Loading = () => {
  return (
    <div className='w=-full h-[100vh] flex flex-col justify-center items-center'>
      <Image
        width={80}
        height={80}
        src='/logo.png'
        alt='Taskforge Studio'
        className='animate-pulse duartion-700'
      />
    </div>
  );
};
