'use client';

import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { IconType } from 'react-icons/lib';

interface ToolButtonProps {
  label: string;
  icon: IconType;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  icon: Icon,
  label,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side='right' sideOffset={14}>
      <Button
        size='icon'
        onClick={onClick}
        disabled={isDisabled}
        variant={isActive ? 'boardActive' : 'board'}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
