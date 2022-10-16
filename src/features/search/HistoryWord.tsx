import { Button } from '@mantine/core';
import { useLongPress, LongPressEvent } from 'use-long-press';
import { useSearchFormContext } from './form-context';
import { useCallback } from 'react';
// import { useLocalStorage } from '@mantine/hooks';

type Props = {
  word: string;
  hoge: any;
}

export const HistoryWord = ({word, hoge}: Props) => {
  const form = useSearchFormContext();

  const callback = useCallback((event: LongPressEvent<Element>) => {
    const word = (event.target as HTMLElement).innerText;
    hoge(word);
  }, []);
  
  const bind = useLongPress(callback, { threshold: 500 });

  const setWord = (value: string) => {
    form.setFieldValue('word', value);
  };

  return (
    <>
      <Button compact size="md" variant="default" color="gray" {...bind()} onClick={() => setWord(word)}>
        {word}
      </Button>
    </>
  );
};
