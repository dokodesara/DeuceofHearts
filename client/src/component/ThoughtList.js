import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

const ThoughtList = ({
    thoughts,
    title,
    showTitle = true,
    showUsername = true,
}) => {
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {thoughts &&
                thoughts.map((thought) => (
                    <div key={thought._id} className="card_comment ">

                        <Card.Group>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {showUsername ? (
                                            <Link
                                                className="text-dark"
                                                to={`/profiles/${thought.thoughtAuthor}`}
                                            >
                                                {thought.thoughtAuthor} <br />
                                                <span style={{ fontSize: '1rem' }}>
                                                    had this thought on {thought.createdAt}
                                                </span>
                                            </Link>
                                        ) : (
                                            <>
                                                <span style={{ fontSize: '1rem' }}>
                                                    You had this thought on {thought.createdAt}
                                                </span>
                                            </>
                                        )}
                                    </Card.Header>
                                    <Card.Description>
                                        <p>{thought.thoughtText}</p>
                                    </Card.Description>
                                    <Link
                                        className="btn btn-primary btn-block btn-squared"
                                        to={`/thoughts/${thought._id}`}
                                    >
                                        Join the discussion on this thought.
                                    </Link>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;
