import React from 'react';
import { Header,Button, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

import Auth from '.././utils/auth';
const logo = new URL("../images/picture3.png", import.meta.url)

const Header1 = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
      
    <Header className="header_class">
       <Segment clearing>
        <div>
        <Header as ='h2' floated='left'>
          <Link className="text-light" to="/">
      
          <div className="brand_logo ">
           
              <img alt="decorative corner header" className="img_logo" src={logo} width="120" height="120" />
           
            <div><h5>DeuceofHearts</h5></div>
            
            </div>

          </Link>
          </Header>
        
        <div>
        <Header as='h2' floated='right'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Button basic inverted color='violet' onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link className="class_button" to="/login">
                Login
              </Link>
              <Link className="class_button" to="/Signup">
                Signup
              </Link>
            </>
          )}
           </Header>
        </div>
        </div>
        </Segment>
    </Header>
  );
};

export default Header1;
