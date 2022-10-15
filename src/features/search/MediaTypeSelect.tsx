import { Radio } from '@mantine/core';
import { useSearchFormContext } from './form-context';

export const MediaTypeSelect = () => {
  const form = useSearchFormContext();
  return (
    <>
      <Radio.Group
        orientation="vertical"
        label="メディア"
        spacing="sm"
        {...form.getInputProps('mediaType')}
      >
        <Radio value="none" label="指定なし" />
        <Radio value="image_movie" label="動画/画像" />
        <Radio value="include_url" label="URL含む" />
        <Radio value="exclude_url" label="URL除外" />
      </Radio.Group>
    </>
  );
};
