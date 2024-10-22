import type { SearchProps } from '@/features/search/SearchProps';
import { createFormContext } from '@mantine/form';

export const [SearchFormProvider, useSearchFormContext, useSearchForm] = createFormContext<SearchProps>();
