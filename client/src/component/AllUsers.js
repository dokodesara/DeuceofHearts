
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import AllUsers from "../component/AllUsers"
//import { useQuery } from "react-apollo";
//import { gql } from "apollo-boost";
import { QUERY_USERS } from "../utils/queries";
import Auth from '../utils/auth';

function DisplayUsers() {
    const { loading, error, data } = useQuery(QUERY_USERS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name="users">
        {data.users.map(user=> (
          <option key={user.id} value={user.username}>
            {user.email}
          </option>
        ))}
      </select>
    );
  }
  export default DisplayUsers ;