import { TextInput } from '@mantine/core';
import { useSearchFormContext } from './form-context';
import { IconAt } from '@tabler/icons';

export const UsernameInput = () => {
  const form = useSearchFormContext();
  return (
    <>
      <TextInput label="特定ユーザーからのみ" icon={<IconAt size={14} />} {...form.getInputProps('username')} />
    </>
  );
};
