import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface BookDemoContextValue {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const BookDemoContext = createContext<BookDemoContextValue | undefined>(undefined);

export const BookDemoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);
  return (
    <BookDemoContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </BookDemoContext.Provider>
  );
};

export const useBookDemo = () => {
  const ctx = useContext(BookDemoContext);
  if (!ctx) throw new Error("useBookDemo must be used within BookDemoProvider");
  return ctx;
};
