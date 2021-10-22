/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      author {
        id
        userId
        username
        picture
        city
        state
        createdAt
        updatedAt
        posts {
          nextToken
        }
        owner
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
        author {
          id
          userId
          username
          picture
          city
          state
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
        author {
          id
          userId
          username
          picture
          city
          state
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        post {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getFriendsList = /* GraphQL */ `
  query GetFriendsList($id: ID!) {
    getFriendsList(id: $id) {
      id
      friendsID
      ownerID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFriendsLists = /* GraphQL */ `
  query ListFriendsLists(
    $filter: ModelFriendsListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendsLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        friendsID
        ownerID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userId
      username
      picture
      city
      state
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        username
        picture
        city
        state
        createdAt
        updatedAt
        posts {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
