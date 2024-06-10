import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export type AlertDialogProps = {
  cancel: {
    label: string;
    disabled?: boolean;
    onCancel: () => void;
  };
};

export type ShowAlertProps = {
  cancel: {
    label: string;
    disabled?: boolean;
    onCancel: () => void;
  };
};

export type AlertDialogContextType = {
  isOpen: boolean;
  dialogProps: AlertDialogProps;
  showAlert: (params: ShowAlertProps) => void;
  hideAlert: () => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | undefined>(
  undefined
);

const defaultState: AlertDialogProps = {
  cancel: {
    label: 'Cancel',
    onCancel: () => {
      console.log('Cancel action not set.');
    },
  },
};

export const AlertDialogProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogProps, setDialogProps] =
    useState<AlertDialogProps>(defaultState);

  const showAlert = useCallback(({ cancel }: ShowAlertProps) => {
    setDialogProps({
      cancel,
    });
    setIsOpen(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AlertDialogContext.Provider
      value={{ isOpen, dialogProps, showAlert, hideAlert }}
    >
      {children}
      <RadixAlertDialog.Root
        open={isOpen}
        onOpenChange={dialogProps.cancel.onCancel}
      >
        <RadixAlertDialog.Portal>
          <RadixAlertDialog.Overlay />
          <RadixAlertDialog.Content
            className="fixed w-1/3 bg-white rounded-s"
            style={{ top: '50%', left: '50%' }}
          >
            Alert Dialog Provider Content
            <div>
              <button
                onClick={dialogProps.cancel.onCancel}
                disabled={dialogProps.cancel.disabled}
                className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white border-blue-700 mx-1"
              >
                {dialogProps.cancel.label}
              </button>
            </div>
          </RadixAlertDialog.Content>
        </RadixAlertDialog.Portal>
      </RadixAlertDialog.Root>
    </AlertDialogContext.Provider>
  );
};

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error('useAlertDialog must be used within a AlertDialogProvider');
  }
  return context;
};
