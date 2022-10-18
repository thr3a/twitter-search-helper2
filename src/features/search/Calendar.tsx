import 'dayjs/locale/ja';
import { DatePicker } from '@mantine/dates';
import { useSearchFormContext } from './form-context';

export const Calendar = () => {
  const form = useSearchFormContext();
  return (
    <>
      <DatePicker locale="ja" inputFormat="YYYY-MM-DD" label="この日より昔(当日を含まない)" labelFormat="YYYY年MM月" {...form.getInputProps('endDate')} />
    </>
  );
};
