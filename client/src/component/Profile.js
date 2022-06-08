import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'

const Profile = ({
    users,
    title,
    showTitle = true,
    // showUsername = true,
}) => {
    if (!users.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    // const [addFriend, { error }] = useMutation(ADD_FRIEND, {
    //     update(cache, { data: { addFriend } }) {
    //         try {
    //             const { friends } = cache.readQuery({ query: QUERY_USER_FRIENDS });

    //             cache.writeQuery({
    //                 query: QUERY_USER_FRIENDS,
    //                 data: { friends: [addFriend, ...friends] },
    //             });
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     },
    // });

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await addFriend({
    //             variables: {
    //                 friendId,
    //             },
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

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
                                                className="text-light"
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
                                        <p>placeholder</p>
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

export default Profile;