'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';

export type Props = {
  onSelect: () => void;
  onOpenProvider: () => void;
};

export const DropDown: FC<Props> = ({ onSelect, onOpenProvider }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-700 mx-1">
      <span>Trigger</span>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content className="rounded border mt-5 bg-white">
        <DropdownMenu.Label className="text-black">
          this is Label
        </DropdownMenu.Label>

        <DropdownMenu.Item onSelect={onSelect}>
          <span className="text-black">Open Alert Dialog</span>
        </DropdownMenu.Item>

        <DropdownMenu.Item onSelect={onOpenProvider}>
          <span className="text-black">Open Alert Dialog WithProvider</span>
        </DropdownMenu.Item>
        <DropdownMenu.Arrow />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
