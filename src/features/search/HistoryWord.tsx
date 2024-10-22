import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { type LongPressEvent, useLongPress } from 'use-long-press';
import { useSearchFormContext } from './form-context';

type Props = {
  word: string;
  deleteHistory: (arg0: string) => void;
};

export const HistoryWord = ({ word, deleteHistory }: Props) => {
  const form = useSearchFormContext();

  const callback = useCallback((event: LongPressEvent<Element>) => {
    const word = (event.target as HTMLElement).innerText;
    deleteHistory(word);
  }, []);

  const bind = useLongPress(callback, { threshold: 500 });

  const setWord = (value: string) => {
    form.setFieldValue('word', value);
  };

  return (
    <>
      <Button compact size='md' variant='default' color='gray' {...bind()} onClick={() => setWord(word)}>
        {word}
      </Button>
    </>
  );
};
