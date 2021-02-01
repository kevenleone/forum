import { GetStaticProps } from 'next';

import Meta from '../components/Meta';
import Category from '../components/Post/Category';
import { initializeApollo, schemas } from '../graphql/apolloNext';

export default function Home({ boards }) {
  return (
    <>
      <Meta title="Board" />
      {boards.map((board, index) => (
        <Category {...board} key={index} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: schemas.getAllBoard,
  });

  return {
    props: {
      boards: data.getAllBoard,
    },
  };
};
