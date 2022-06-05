import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Checkbox, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <main className="flex-row justify-center mb-3">
      <div className="col-12 col-lg-10">
        <div className="card">

          <Header as="h2" textAlign="center">
            Login
          </Header>
          <div className="card-body">
            {
              data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (


                <Grid centered columns={2}>
                  <Grid.Column>
                    <Segment>
                      <Form size="large" onSubmit={handleFormSubmit} >
                        <Form.Field>
                          <label>Email</label>
                          <input placeholder='Your email' name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                          <label>Password</label>
                          <input placeholder='*******' name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange} />
                        </Form.Field>
                        <Form.Field>
                          <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                      </Form>
                    </Segment>
                    <Message>
                      Not registered yet? <a href="/Signup">Sign Up</a>
                    </Message>
                  </Grid.Column>
                </Grid>
              )
            }
            {
              error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </main>


  );
};



export default Login;
