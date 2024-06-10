'use client';
import { Alert } from './AlertDialog';
import { ShowAlertProps, useAlertDialog } from './AlertProviders';
import { DropDown } from './DropDown';
import { useState } from 'react';

export default function Home() {
  const { showAlert, hideAlert } = useAlertDialog();
  const [open, setOpen] = useState(false);
  const onSelect = () => {
    setOpen(!open);
  };
  const onOpenProvider = () => {
    showAlert({
      cancel: {
        label: 'cancel',
        onCancel: () => {
          hideAlert();
        },
      },
    } satisfies ShowAlertProps);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DropDown onSelect={onSelect} onOpenProvider={onOpenProvider} />
      <Alert open={open} onOpenChange={setOpen} />
    </main>
  );
}
