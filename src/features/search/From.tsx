import { Button, Center, Space } from '@mantine/core';
import { SearchFormProvider, useSearchForm } from './form-context';
import { WordInput } from '@/features/search/WordInput';
import { ExcludeWordInput } from '@/features/search/ExcludeWordInput';
import { UsernameInput } from '@/features/search/UserNameInput';
import { MediaTypeSelect } from '@/features/search/MediaTypeSelect';
import { PopularTypeSelect } from '@/features/search/PopularTypeSelect';
import { OnlyFollowerCheckbox } from '@/features/search/OnlyFollowerCheckbox';
import { OnlyJapaneseCheckbox } from '@/features/search/OnlyJapaneseCheckbox';
import { SearchProps } from '@/features/search/SearchProps';
import { HistoryWords } from '@/features/search/HistoryWords';
import { useLocalStorage } from '@mantine/hooks';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { usePageContext } from '@/features/common/contexts/PageContext';

export const SearchForm = () => {
  const context = usePageContext();
  const {searchWords, setSearchWords} = context;

  const form = useSearchForm({
    initialValues: {
      word: '',
      excludeWord: '',
      username: '',
      mediaType: 'none',
      popularType: 'none',
      onlyFollowerFlag: false,
      onlyJapanese: true,
    },
  });

  const search = (values:SearchProps) => {
    setSearchWords(x => [...new Set([...x, values.word])]);

    const query = [];
    query.push(`${encodeURIComponent(values.word)} OR @DoNotUseUNAME`);
    query.push(`-${encodeURIComponent(values.excludeWord)}`);
    if(values.username) {
      query.push(`from:${values.username}`);
    }
    if (values.onlyFollowerFlag) {
      query.push('filter:follows');
    }
    if (values.onlyJapanese) {
      query.push('lang:ja');
    }
    if (values.mediaType === 'image_movie') {
      query.push('filter:media');
    }
    if (values.mediaType === 'include_url') {
      query.push('filter:links -filter:media');
    }
    if (values.mediaType === 'exclude_url') {
      query.push('-filter:links');
    }
    if (values.popularType !== 'none') {
      query.push(`min_faves:${values.popularType}`);
    }

    const url = `https://twitter.com/search?f=live&q=${query.join(' ')}`;
    window.open(url);
  };

  return (
    <SearchFormProvider form={form}>
      <form onSubmit={form.onSubmit(search)}>
        <WordInput></WordInput>
        <HistoryWords></HistoryWords>
        <ExcludeWordInput></ExcludeWordInput>
        <UsernameInput></UsernameInput>
        <MediaTypeSelect></MediaTypeSelect>
        <PopularTypeSelect></PopularTypeSelect>
        <Space h="md"></Space>
        <OnlyFollowerCheckbox></OnlyFollowerCheckbox>
        <OnlyJapaneseCheckbox></OnlyJapaneseCheckbox>

        <Center style={{ width: "100%", height: "auto" }}>
          <Button type="submit" size="md">検索</Button>
        </Center>

      </form>
    </SearchFormProvider>
  );
};
