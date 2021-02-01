import { Post, Rank } from '../interfaces';
import { initializeApollo, schemas } from './apolloNext';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const client = initializeApollo();
    const { data } = await client.query({
      query: schemas.getAllPosts,
    });

    return data.getAllPost;
  } catch (e) {
    return [];
  }
};

export const getRankByType = async (
  type: string,
  pageSize?: number,
): Promise<Rank[]> => {
  const client = initializeApollo();
  try {
    const { data } = await client.query({
      query: schemas.getRankByLv,
      variables: { data: { pageSize, type } },
    });

    const { getRankByLv: ranks } = data;

    return ranks;
  } catch (e) {
    return [];
  }
};
