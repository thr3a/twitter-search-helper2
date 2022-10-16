import { Button } from '@mantine/core';

type Props = {
  callback: VoidFunction;
}

export const ClearHistoryButton = ({callback}: Props) => {
  
  return (
    <>
      <Button color="yellow" size="md" compact onClick={callback}>
        検索履歴全削除
      </Button>
    </>
  );
};
