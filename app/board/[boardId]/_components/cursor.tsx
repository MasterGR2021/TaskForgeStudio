'use client';

import { connectionToColor } from '@/lib/utils';
import { useOther } from '@/liveblocks.config';
import { memo } from 'react';
import { LuMousePointer2 } from 'react-icons/lu';

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || 'Teammate';

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      height={50}
      width={name.length * 10 + 24}
      className='relative drop-shadow-md'
    >
      <LuMousePointer2
        className='h-5 w-5'
        style={{
          fill: connectionToColor(connectionId),
          color: connectionToColor(connectionId),
        }}
      />
      <div
        className='absolute left-5 px-1.5 py-0.5 rounded-md text-sm text-white'
        style={{
          backgroundColor: connectionToColor(connectionId),
        }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = 'Cursor';
