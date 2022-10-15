import { TextInput } from '@mantine/core';
import { useSearchFormContext } from './form-context';
import { IconAt } from '@tabler/icons';

export const UsernameInput = () => {
  const form = useSearchFormContext();
  return (
    <>
      <div style={{ maxWidth: 400 }}>
        <TextInput label="特定ユーザーからのみ" icon={<IconAt size={14} />} {...form.getInputProps('username')} />
      </div>
    </>
  );
};
