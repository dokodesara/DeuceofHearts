import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {Button, Checkbox, Form ,Grid,Header,Message,Segment} from 'semantic-ui-react'

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        DOB: '',
        Gender: '',
        password: '',

    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (

        <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Signin
          </Header>
          

                            
                <Segment>
                            <Form size="large" onSubmit={handleFormSubmit}>
                                <Message>
                                    <Message.Header>Rules n regulations</Message.Header>
                                    <p>
                                        explicit/overly personal content is for private conversations and boundaries must be maintained. Harassment will not be tolerated
                                    </p>
                                </Message>
                                <Form.Field>
                                    <label>User name</label>
                                    <input placeholder='username'  
                                           />
                                </Form.Field>
                                <Form.Field>
                                    <label>email</label>
                                    <input placeholder='email' type="email"
                                          />
                                </Form.Field>
                                <Form.Field>
                                    <label>DOB</label>
                                    <input placeholder='DOB'  />
                                </Form.Field>
                                


                                <Form.Group  inline>
                                    <label>Gender</label>
                                    <Form.Field label='F' control='input' type='checkbox' />
                                    <Form.Field label='M' control='input' type='checkbox'/>
                                    <Form.Field label='N' control='input' type='checkbox'/>
                                   
                                </Form.Group>
                                <Message>
                                        <Message.Header>Seeking:</Message.Header>
                                        <p>
                                            (choose all that apply: M/F/N/just social interaction)
                                        </p>
                                    </Message>
                                    



                                <Form.Field>
                                    <label>Password</label>
                                    <input placeholder='password' type="password"
                                             />
                                </Form.Field>




                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>

                            </Segment>
                            </Grid.Column>
      </Grid>

                        );};

                       

export default Signup;