
import React from 'react'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './pages/Login';
import Signup from './pages/Signup';


//getting images through URL constructor which are not in public folder
//const backGround=new URL("./images/picture2.png",import.meta.url)
const httpLink = createHttpLink({
  uri: "/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  console.log('token: '+ token)

  return {
    fetchOptions: { mode: "no-cors" },
    headers: {
      ...headers,
      'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Credentials': true,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>

      <Router>
        <div>
          <Header />

          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/Signup"} element={<Signup />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/me"} element={<OnBoarding />} />
            <Route
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>

        </div>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
