import type { NextPage, InferGetStaticPropsType } from 'next';
import {SearchForm} from '@/features/search/From';

const Home: NextPage = () => {
  return (
    <>
      <SearchForm></SearchForm>
    </>
  );
};

export default Home;
