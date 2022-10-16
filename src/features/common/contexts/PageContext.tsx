import { useState, createContext, useContext} from 'react';
import type {Dispatch, SetStateAction, ReactNode} from 'react';
import { useLocalStorage } from '@mantine/hooks';

export interface ChildrenProps {
  children: ReactNode
}
type PageContextType = {
  searchWords: string[],
  setSearchWords: Dispatch<SetStateAction<string[]>>,
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({children} : ChildrenProps) => {
  const [searchWords, setSearchWords] = useLocalStorage<string[]>({key: 'words', defaultValue: []});

  return (
    <PageContext.Provider value={{searchWords,setSearchWords}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  
  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
};
