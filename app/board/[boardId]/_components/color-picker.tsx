'use client';

import { colorToCss } from '@/lib/utils';
import { Color } from '@/types/canvas';

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className='flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-netural-200'>
      <ColorButton
        color={{
          r: 255,
          g: 0,
          b: 0,
        }}
        onClick={onChange}
      />

      <ColorButton
        color={{
          r: 0,
          g: 255,
          b: 0,
        }}
        onClick={onChange}
      />

      <ColorButton
        color={{
          r: 0,
          g: 0,
          b: 255,
        }}
        onClick={onChange}
      />

      <ColorButton
        color={{
          r: 0,
          g: 255,
          b: 255,
        }}
        onClick={onChange}
      />

      <ColorButton
        color={{
          r: 255,
          g: 0,
          b: 255,
        }}
        onClick={onChange}
      />

      <ColorButton
        color={{
          r: 255,
          g: 255,
          b: 0,
        }}
        onClick={onChange}
      />
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className='w-5 h-5 items-center flex justify-center hover:opacity-75 transition'
      onClick={() => onClick(color)}
    >
      <div
        className='w-5 h-5 rounded-md border border-neutral-300'
        style={{
          background: colorToCss(color),
        }}
      ></div>
    </button>
  );
};
