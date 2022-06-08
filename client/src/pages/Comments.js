import React from 'react';

// import CommentList from '../component/ThoughtList';
import CommentForm from '../component/CommentForm';

// import { QUERY_ALL_THOUGHTS } from '../utils/queries';

const Comments = () => {
   
        // const { loading, data } = useQuery(QUERY_ALL_THOUGHTS);
        // const thoughts = data?.thoughts || [];
      
        return (
          <main>
            <div className="flex-row justify-center">
              <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
              >
                <CommentForm />
              </div>
              {/* <div className="col-12 col-md-8 mb-3">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <><CommentList
                      thoughts={thoughts}
                      title="Some Food for Thought..." /><h1>MY THOUGHTS </h1></>
                )}
              </div> */}
            </div>
          </main>
        );
      };
      
     export default Comments