/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        Bio
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        Bio
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        Bio
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
          Bio
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
          Bio
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
          Bio
          createdAt
          updatedAt
          owner
        }
      }
      owner
    }
  }
`;
export const createFriendsList = /* GraphQL */ `
  mutation CreateFriendsList(
    $input: CreateFriendsListInput!
    $condition: ModelFriendsListConditionInput
  ) {
    createFriendsList(input: $input, condition: $condition) {
      id
      friendsID
      ownerID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFriendsList = /* GraphQL */ `
  mutation UpdateFriendsList(
    $input: UpdateFriendsListInput!
    $condition: ModelFriendsListConditionInput
  ) {
    updateFriendsList(input: $input, condition: $condition) {
      id
      friendsID
      ownerID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFriendsList = /* GraphQL */ `
  mutation DeleteFriendsList(
    $input: DeleteFriendsListInput!
    $condition: ModelFriendsListConditionInput
  ) {
    deleteFriendsList(input: $input, condition: $condition) {
      id
      friendsID
      ownerID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userId
      username
      picture
      city
      state
      Bio
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userId
      username
      picture
      city
      state
      Bio
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userId
      username
      picture
      city
      state
      Bio
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
