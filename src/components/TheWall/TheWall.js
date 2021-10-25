
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getUser, listPosts } from '../../graphql/queries';
import { listUsers } from '../../graphql/queries';
import awsExports from "../../aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
import { createPost } from '../../graphql/mutations';
Amplify.configure(awsExports);

const initialState = { title: '' }

const TheWall = () => {
  const [posts, setPosts] = useState([]);
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts))
      const posts = postData.data.listPosts.items
      setPosts(posts)
    } catch (err) { console.log('error fetching todos') }
  }

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function addPost() {
    try {
      if (!formState.title) return
      const post = { ...formState }
      setPosts([...posts, post])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createPost, {input: post}))
    } catch (err) {
      console.log('error creating post:', err)
    }
  }

  return (
    <div>
      <h1>The Wall</h1>
      {
        posts.map((post, index) => (
          <div key={post.id ? post.id : index} className="max-w-sm bg-white m-4 p-4 rounded overflow-hidden shadow-lg">
            <p style={styles.todoName}>{post.title}</p>
            {/* <p> author: {post.author}</p> */}
            <p className="text-xs"><i>Last Updated: </i>{post.updatedAt}</p>
          </div>
        ))
      }


<div style={styles.container}>
      <h2>Post</h2>
      <input
        onChange={event => setInput('title', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="title"
      />
      <input
        onChange={event => setInput('post_text', event.target.value)}
        style={styles.input}
        value={formState.post_text}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addPost}>Add Post</button>
      {
        posts.map((post, index) => (
          <div key={post.id ? post.id : index} style={styles.todo}>
            <p style={styles.todoName}>{post.name}</p>
            <p style={styles.todoDescription}>{post.description}</p>
          </div>
        ))
      }
    </div>

    </div>
  )
};


const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgrouxndColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(TheWall)


