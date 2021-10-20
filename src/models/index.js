// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Message } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Message
};