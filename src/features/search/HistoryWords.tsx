import { usePageContext } from '@/features/common/contexts/PageContext';
import { ClearHistoryButton } from '@/features/search/ClearHistoryButton';
import { HistoryWord } from '@/features/search/HistoryWord';
import { RandomTweetButton } from '@/features/search/RandomTweetButton';
import { useSearchFormContext } from './form-context';

export const HistoryWords = () => {
  const context = usePageContext();
  const form = useSearchFormContext();
  const { searchWords, setSearchWords } = context;

  const deleteHistory = (word: string) => {
    setSearchWords((x) => x.filter((x) => x !== word));
  };

  const clearHistory = () => {
    if (window.confirm('全削除しますか？(キーワード長押しで個別削除できます)')) {
      setSearchWords((x) => []);
    }
  };

  return (
    <>
      {searchWords.map((val, index) => (
        <HistoryWord word={val} key={index} deleteHistory={deleteHistory} />
      ))}
      <div>
        <ClearHistoryButton callback={clearHistory} />
        <RandomTweetButton
          callback={() => {
            form.setValues({ word: '-iaoufdsgipfuaopfhaf' });
          }}
        />
      </div>
    </>
  );
};
