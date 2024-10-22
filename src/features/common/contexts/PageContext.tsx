import { useLocalStorage } from '@mantine/hooks';
import { createContext, useContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}
type PageContextType = {
  searchWords: string[];
  setSearchWords: Dispatch<SetStateAction<string[]>>;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: ChildrenProps) => {
  const [searchWords, setSearchWords] = useLocalStorage<string[]>({ key: 'words', defaultValue: [] });

  return <PageContext.Provider value={{ searchWords, setSearchWords }}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
};
