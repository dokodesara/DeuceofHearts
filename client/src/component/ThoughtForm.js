import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_ALL_THOUGHTS } from '../utils/queries';
import { Form, TextArea } from 'semantic-ui-react'


import Auth from '../utils/auth';

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_ALL_THOUGHTS });

        cache.writeQuery({
          query: QUERY_ALL_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      // });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>About me</h3>

      {Auth.loggedIn() ? (
        <>
        {/* <p>{placeholder}</p> */}
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>
          <Form
            class="ui form"
            onSubmit={handleFormSubmit}
          >

            <TextArea
              name="thoughtText"
              placeholder="Here's a new thought..."
              value={thoughtText}
              onChange={handleChange}
            ></TextArea>
         

          <div className="div-button">
            <button className="class_button" type="submit">
              Add Thought
            </button>
          </div>
          {error && (
            <div className="div_class">
              {error.message}
            </div>
          )}
        </Form>
        </>
  ) : (
    <p>
      You need to be logged in to share your thoughts. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
  )
}
    </div >
  );
};

export default ThoughtForm;
