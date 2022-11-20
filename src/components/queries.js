import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query allPosts {
    allPosts {
      id
      title
      author
      content
      next
      prev
      date
    }
  }
`;

export const GET_POST = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      title
      author
      content
      next
      prev
      date
    }
  }
`;
