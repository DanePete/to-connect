/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  posts?: ModelPostConnection | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blogID: string,
  createdAt: string,
  updatedAt: string,
  blog?: Blog | null,
  owner?: string | null,
  comments?: ModelCommentConnection | null,
  author: User,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  post?: Post | null,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  username?: string | null,
  picture?: string | null,
  city?: string | null,
  state?: string | null,
  Bio?: string | null,
  createdAt: string,
  updatedAt: string,
  posts?: ModelPostConnection | null,
  owner?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogID: string,
  postAuthorId: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogID?: string | null,
  postAuthorId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateFriendsListInput = {
  id?: string | null,
  friendsID: string,
  ownerID: string,
};

export type ModelFriendsListConditionInput = {
  friendsID?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelFriendsListConditionInput | null > | null,
  or?: Array< ModelFriendsListConditionInput | null > | null,
  not?: ModelFriendsListConditionInput | null,
};

export type FriendsList = {
  __typename: "FriendsList",
  id: string,
  friendsID: string,
  ownerID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFriendsListInput = {
  id: string,
  friendsID?: string | null,
  ownerID?: string | null,
};

export type DeleteFriendsListInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  username?: string | null,
  picture?: string | null,
  city?: string | null,
  state?: string | null,
  Bio?: string | null,
};

export type ModelUserConditionInput = {
  userId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  Bio?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  userId?: string | null,
  username?: string | null,
  picture?: string | null,
  city?: string | null,
  state?: string | null,
  Bio?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items?:  Array<Blog | null > | null,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelFriendsListFilterInput = {
  id?: ModelIDInput | null,
  friendsID?: ModelStringInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelFriendsListFilterInput | null > | null,
  or?: Array< ModelFriendsListFilterInput | null > | null,
  not?: ModelFriendsListFilterInput | null,
};

export type ModelFriendsListConnection = {
  __typename: "ModelFriendsListConnection",
  items?:  Array<FriendsList | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  Bio?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateFriendsListMutationVariables = {
  input: CreateFriendsListInput,
  condition?: ModelFriendsListConditionInput | null,
};

export type CreateFriendsListMutation = {
  createFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFriendsListMutationVariables = {
  input: UpdateFriendsListInput,
  condition?: ModelFriendsListConditionInput | null,
};

export type UpdateFriendsListMutation = {
  updateFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFriendsListMutationVariables = {
  input: DeleteFriendsListInput,
  condition?: ModelFriendsListConditionInput | null,
};

export type DeleteFriendsListMutation = {
  deleteFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items?:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFriendsListQueryVariables = {
  id: string,
};

export type GetFriendsListQuery = {
  getFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFriendsListsQueryVariables = {
  filter?: ModelFriendsListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsListsQuery = {
  listFriendsLists?:  {
    __typename: "ModelFriendsListConnection",
    items?:  Array< {
      __typename: "FriendsList",
      id: string,
      friendsID: string,
      ownerID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    author:  {
      __typename: "User",
      id: string,
      userId: string,
      username?: string | null,
      picture?: string | null,
      city?: string | null,
      state?: string | null,
      Bio?: string | null,
      createdAt: string,
      updatedAt: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
      blog?:  {
        __typename: "Blog",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      author:  {
        __typename: "User",
        id: string,
        userId: string,
        username?: string | null,
        picture?: string | null,
        city?: string | null,
        state?: string | null,
        Bio?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateFriendsListSubscription = {
  onCreateFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFriendsListSubscription = {
  onUpdateFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFriendsListSubscription = {
  onDeleteFriendsList?:  {
    __typename: "FriendsList",
    id: string,
    friendsID: string,
    ownerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username?: string | null,
    picture?: string | null,
    city?: string | null,
    state?: string | null,
    Bio?: string | null,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        blogID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};
