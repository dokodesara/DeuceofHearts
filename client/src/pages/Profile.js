import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ThoughtForm from '../component/ThoughtForm';
import ThoughtList from '../component/ThoughtList';

import { QUERY_USERS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const aroaceFlag = new URL("../images/aroaceflag.png", import.meta.url)


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USERS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className=" mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="thought_Msg">


          <div className="float-right">
            <img src={aroaceFlag} alt="aro ace flag" id="homeFlag" width="400" />
          </div>

          <ThoughtForm />

          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />

        </div>
        {!userParam && (
          <div
            className=""
            style={{ border: '1px dotted #1a1a1a' }}
          >
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
