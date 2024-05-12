'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounceValue } from 'usehooks-ts';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useDebounceValue('', 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
    setDebouncedValue(e.target?.value);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', debouncedValue);
    const newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    router.push(newRelativePathQuery);
    console.log(searchParams.get('search'));
  }, [debouncedValue, router]);

  return (
    <div className='w-full relative'>
      <MagnifyingGlassIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
      <Input
        value={value}
        onChange={handleChange}
        className='w-full max-w-[516px] pl-9'
        placeholder='Search Boards...'
      />
    </div>
  );
};
