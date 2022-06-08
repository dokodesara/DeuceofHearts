import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'

const UserList = ({
    users,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!users.length) {
        return <h3>No Other Users</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {users &&
                users.map((user) => (
                    <div key={user._id} className="card_comment ">

                        <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {
                                            <Link
                                                className="text-dark"
                                                to={`/profiles/${user._id}`}
                                            >
                                                {user.username} <br />
                                                <span style={{ fontSize: '1rem' }}>
                                                    {user.Gender} | {user.DOB}
                                                </span>
                                            </Link>
                                            }
                                    </Card.Header>
                                    <Card.Description>
                                        <p>About Me:</p>
                                    </Card.Description>
                                    <Button
                                        className="btn btn-primary btn-block btn-squared"
                                        // to={`/thoughts/${thought._id}`}
                                    >
                                        Add this person as a friend
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                ))}
        </div>
    );
};

export default UserList;