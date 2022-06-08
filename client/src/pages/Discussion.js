import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../component/ThoughtList';
import ThoughtForm from '../component/ThoughtForm';

import { QUERY_ALL_THOUGHTS } from '../utils/queries';




const Discussion = () => {
   
        const { loading, data } = useQuery(QUERY_ALL_THOUGHTS);
        const thoughts = data?.thoughts || [];
      
        return (
          <main>
            <div className="thought_class">
              <section>
              <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
              >
                <ThoughtForm />
              </div>
              </section>
              <sction >
              <div className="class_thought">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <><ThoughtList
                      thoughts={thoughts}
                      title="Some Feed for Thought(s)..." /><h1>MY THOUGHTS </h1></>
                )}
              </div>
              </sction>S
            </div>
          </main>
        );
      };
      
     export default Discussion