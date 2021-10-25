// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages, Chat, Blog, Post, User, Comment } = initSchema(schema);

export {
  Messages,
  Chat,
  Blog,
  Post,
  User,
  Comment
};