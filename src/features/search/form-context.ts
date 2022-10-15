import { createFormContext } from '@mantine/form';
import { SearchProps } from '@/features/search/SearchProps';

export const [SearchFormProvider, useSearchFormContext, useSearchForm] = createFormContext<SearchProps>();
