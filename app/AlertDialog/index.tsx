'use client';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FC } from 'react';

export type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Alert: FC<Props> = ({ open, onOpenChange }) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content
          className="fixed w-1/3 bg-white rounded-s"
          style={{ top: '50%', left: '50%' }}
        >
          <span className="text-black">Alert Dialog Content</span>
          <button
            className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-700 mx-1"
            onClick={() => onOpenChange(false)}
          >
            close
          </button>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
