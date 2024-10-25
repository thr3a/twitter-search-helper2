import { Button } from '@mantine/core';

type Props = {
  callback: VoidFunction;
};

export const RandomTweetButton = ({ callback }: Props) => {
  return (
    <>
      <Button color='grape' size='md' compact onClick={callback}>
        ランダム
      </Button>
    </>
  );
};
