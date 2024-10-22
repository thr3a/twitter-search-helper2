import { Radio } from '@mantine/core';
import { useSearchFormContext } from './form-context';

export const PopularTypeSelect = () => {
  const form = useSearchFormContext();
  return (
    <>
      <Radio.Group orientation='vertical' label='いいね数' spacing='sm' {...form.getInputProps('popularType')}>
        <Radio value='none' label='指定なし' />
        <Radio value='5' label='5いいね以上' />
        <Radio value='20' label='20いいね以上' />
      </Radio.Group>
    </>
  );
};
