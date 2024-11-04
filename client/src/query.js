import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts {
      text
      comments {
        author
        text
      }
    }
  }
`;

export const ADD_SONG = gql `
    mutation addComment($author: String, $text: String){
        addComment(author: $author, text: $text){
            author
            text
        }
    }
`;