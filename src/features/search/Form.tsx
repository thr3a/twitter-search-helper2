import { usePageContext } from '@/features/common/contexts/PageContext';
import { Calendar } from '@/features/search/Calendar';
import { ExcludeBlueCheckbox } from '@/features/search/ExcludeBlueCheckbox';
import { ExcludeWordInput } from '@/features/search/ExcludeWordInput';
import { HistoryWords } from '@/features/search/HistoryWords';
import { MediaTypeSelect } from '@/features/search/MediaTypeSelect';
import { OnlyFollowerCheckbox } from '@/features/search/OnlyFollowerCheckbox';
import { OnlyJapaneseCheckbox } from '@/features/search/OnlyJapaneseCheckbox';
import { PopularTypeSelect } from '@/features/search/PopularTypeSelect';
import type { SearchProps } from '@/features/search/SearchProps';
import { UsernameInput } from '@/features/search/UserNameInput';
import { WordInput } from '@/features/search/WordInput';
import { Button, Center, Space } from '@mantine/core';
import dayjs from 'dayjs';
import { SearchFormProvider, useSearchForm } from './form-context';

export const SearchForm = () => {
  const context = usePageContext();
  const { setSearchWords } = context;

  const form = useSearchForm({
    initialValues: {
      word: '',
      excludeWord: '',
      username: '',
      mediaType: 'none',
      popularType: 'none',
      onlyFollowerFlag: false,
      onlyJapanese: true,
      excludeBlue: false,
      endDate: ''
    }
  });

  const search = (values: SearchProps) => {
    const query = [];

    if (values.word) {
      setSearchWords((x) => [...new Set([...x, values.word])]);
      query.push(encodeURIComponent(values.word));
    }

    if (values.excludeWord) {
      query.push(`-${encodeURIComponent(values.excludeWord)}`);
    }
    if (values.username) {
      query.push(`from:${values.username}`);
    }
    if (values.onlyFollowerFlag) {
      query.push('filter:follows');
    }
    if (values.onlyJapanese) {
      query.push('lang:ja');
    }
    if (values.mediaType === 'image') {
      query.push('filter:twimg');
    }
    if (values.mediaType === 'movie') {
      query.push('filter:consumer_video');
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
    if (values.endDate !== '' && values.endDate !== null) {
      const endDate = dayjs(values.endDate).format('YYYY-MM-DD');
      query.push(`until:${endDate}`);
    }
    if (values.excludeBlue) {
      query.push('-filter:blue_verified');
    }
    // query.push('-source:Twitter_for_Advertisers');

    const url = `https://twitter.com/search?f=live&q=${query.join(' ')}`;
    window.open(url);
  };

  return (
    <SearchFormProvider form={form}>
      <form onSubmit={form.onSubmit(search)}>
        <WordInput />
        <HistoryWords />
        <ExcludeWordInput />
        <UsernameInput />
        <MediaTypeSelect />
        <PopularTypeSelect />
        <Calendar />
        <Space h='md' />
        <OnlyFollowerCheckbox />
        <OnlyJapaneseCheckbox />
        <ExcludeBlueCheckbox />

        <Center
          sx={(theme) => ({
            width: '100%',
            height: 'auto',
            paddingBottom: theme.spacing.xl
          })}
        >
          <Button type='submit' size='md' mb={'xl'}>
            検索
          </Button>
        </Center>
      </form>
    </SearchFormProvider>
  );
};
