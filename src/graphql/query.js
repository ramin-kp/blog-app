import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      writer {
        name
        field
        avatar {
          url
        }
      }
    }
  }
`;
const GET_AUTHORS = gql`
  query {
    writers {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;
const GET_AUTHOR_INFO = gql`
  query getAuthor($slug: String!) {
    writer(where: { slug: $slug }) {
      field
      name
      id
      avatar {
        id
        url
      }
      description {
        html
      }
      posts {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
    }
  }
`;
const GET_BLOG_INFO = gql`
  query getBlog($slug: String!) {
    post(where: { slug: $slug }) {
      coverPhoto {
        url
      }
      title
      slug
      content {
        html
      }
      comments {
        id
        email
        name
        text
      }
    }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS, GET_AUTHOR_INFO, GET_BLOG_INFO };
