import { Skeleton } from '@/components/ui/skeleton';
import { ToolButton } from './tool-button';
import {
  LuCircle,
  LuMousePointer2,
  LuPencil,
  LuRedo2,
  LuSquare,
  LuStickyNote,
  LuType,
  LuUndo2,
} from 'react-icons/lu';
import { CanvasMode, CanvasState, LayerType } from '@/types/canvas';

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  canRedo,
  canUndo,
  redo,
  undo,
}: ToolbarProps) => {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
      <div className='bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md'>
        <ToolButton
          label='Select'
          icon={LuMousePointer2}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label='Text'
          icon={LuType}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label='Sticky Note'
          icon={LuStickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label='Rectangle'
          icon={LuSquare}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label='Ellipse'
          icon={LuCircle}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        {/* <ToolButton
          label='Pencil'
          icon={LuPencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
        /> */}
      </div>
      <div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md'>
        <ToolButton
          label='Undo'
          icon={LuUndo2}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label='Redo'
          icon={LuRedo2}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute bg-white h-[360px] w-[52px] top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
      <Skeleton className='h-full w-full bg-muted-foreground' />
    </div>
  );
};
