import { Title } from '@mantine/core';

export const Header = () => {
  return (
    <>
      <Title
        order={1}
        sx={(theme) => ({
          marginTop: theme.spacing.md
          // marginBottom: theme.spacing.md
        })}
      >
        Twitter検索ヘルパー
      </Title>
      <Title
        order={4}
        color='dimmed'
        sx={(theme) => ({
          // marginTop: theme.spacing.md,
          marginBottom: theme.spacing.md
        })}
      >
        Twitterの高度な検索を、より簡単に行えるツールです。
      </Title>
    </>
  );
};
