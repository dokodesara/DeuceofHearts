// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
import React from 'react';
import { useQuery } from '@apollo/client';

import Profile from '../component/Profile';

// import { ADD_FRIEND } from '../utils/mutations';
import { QUERY_USER_FRIENDS } from '../utils/queries';

//import Auth from '../utils/auth';

const Dashboard = () => {

    const { loading, data } = useQuery(QUERY_USER_FRIENDS);
    const friends = data?.friends || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-8 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <><Profile
                            friends={friends}
                            title="User Friends" /><h1>USER FRIENDS</h1></>
                    )}
                </div>
                {/* <div
                    className="col-12 col-md-10 mb-3 p-3"
                    style={{ border: '1px dotted #1a1a1a' }}
                >
                    <ThoughtForm />
                </div> */}
            </div>
        </main>
    )

}
export default Dashboard