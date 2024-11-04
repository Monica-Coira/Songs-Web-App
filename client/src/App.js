import './App.css';
import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { AddComment } from './components/AddSong';
import { GET_POSTS } from './query';
import { Segment, Header } from 'semantic-ui-react'


function App() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return "Loading...";
  if (error) return "Error";

  return (
    <div>
      <Header as="h1" textAlign="center" style={{ marginBottom: '2rem', marginTop: '2rem' }}>
        Favorite Songs
      </Header>
      <Segment>
        <div class="ui one column stackable center aligned page grid">
          {data?.posts.map((post, index) => (
            <div key={index}>
              <p>{post.text}</p>
              {post.comments.map((comment, i) => (
                <p key={i}><strong>{comment.author}: </strong>{comment.text}</p>
              ))}
            </div>
          ))}
          <AddComment />
        </div>
      </Segment>
    </div>
  );
}

export default App;

