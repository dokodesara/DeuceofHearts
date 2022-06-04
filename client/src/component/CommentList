import React from 'react';
import { Card } from 'semantic-ui-react'


const CommentList = ({ comments = [] }) => {
    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }


    return (
        <>
            <h3
                className="class_Comments"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Comments
            </h3>
            <div>
                {comments &&
                    comments.map((comment) => (
                        <div key={comment._id} className="card_comment">
                            <Card.Group>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>

                                            {comment.commentAuthor} commented{' '}
                                            <span style={{ fontSize: '0.825rem' }}>
                                                on {comment.createdAt}
                                            </span>
                                        </Card.Header>
                                        <Card.Description>
                                            <p>{comment.commentText}</p>
                                        </Card.Description>

                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </div>

                    ))}
            </div>
        </>
    );
};

export default CommentList;