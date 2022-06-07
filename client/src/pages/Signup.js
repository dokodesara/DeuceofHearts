import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, Checkbox, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        dob: '',
        gender: '',
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
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <Header as="h2" textAlign="center">
                        SignUp
                    </Header>

                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (


                            <Grid centered columns={2}>
                                <Grid.Column>
                                    <Segment>
                                        <Form size="small" onSubmit={handleFormSubmit}>
                                            <Message>
                                                <Message.Header>Rules and Regulations</Message.Header>
                                                <p>
                                                    explicit/overly personal content is for private conversations and boundaries must be maintained. Harassment will not be tolerated
                                                </p>
                                            </Message>
                                            <Form.Field>
                                                <label>User name</label>
                                                <input placeholder='username'
                                                    name="username"
                                                    type="text"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>email</label>
                                                <input placeholder='email'
                                                    name="email"
                                                    type="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>DOB</label>
                                                <input placeholder='DOB'
                                                    name="dab"
                                                    type="Date"
                                                    value={formState.dob}
                                                    onChange={handleChange} />
                                            </Form.Field>

                                            <Form.Field>
                                                <label>Gender:</label>
                                                <select onChange={handleChange} name="gender">

                                                    <option value="M">M</option>
                                                    <option value="F">F</option>
                                                    <option value="N">N</option>
                                                </select>

                                            </Form.Field>

                                            {/* <Message>
                                                <Message.Header>Seeking:</Message.Header>
                                                <p>
                                                    (choose all that apply: M/F/N/just social interaction)
                                                </p>
                                            </Message> */}


                                            <Form.Field>
                                                <label>Password</label>
                                                <input placeholder='password'
                                                    type="password"
                                                    name="password"
                                                    value={formState.password}
                                                    onChange={handleChange}
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
                        )}


                        {error && (
                            <div className="err_class">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};



export default Signup;