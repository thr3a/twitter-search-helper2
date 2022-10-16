import { HistoryWord } from '@/features/search/HistoryWord';
import { useLocalStorage, useSetState } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import { usePageContext } from '@/features/common/contexts/PageContext';
import { ClearHistoryButton } from '@/features/search/ClearHistoryButton';

export const HistoryWords = () => {
  const context = usePageContext();
  const {searchWords, setSearchWords} = context;

  const hoge = (word: string) => {
    setSearchWords(x => x.filter(x => x !== word));
  };

  const clearHistory = () => {
    if (window.confirm('全削除しますか？(キーワード長押しで個別削除できます)')) {
      setSearchWords(x => []);
    }
  };

  return (
    <>
      {searchWords.map((val, index) => (
        <HistoryWord word={val} key={index} hoge={hoge}></HistoryWord>
      ))}
      <div>
        <ClearHistoryButton callback={clearHistory}></ClearHistoryButton>
      </div>
    </>
  );
};
