import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query allPosts {
    allPosts {
      title
      author
      content
      next
      prev
      date
    }
  }
`;
