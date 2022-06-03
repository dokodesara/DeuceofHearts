import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './pages/Login';
import Signup from './pages/Signup';

import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";


import { BrowserRouter,Routes,Route } from 'react-router-dom'
//getting images through URL constructor which are not in public folder
//const backGround=new URL("./images/picture2.png",import.meta.url)
const httpLink = createHttpLink({
  uri: "/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: "http://example.com/graphql/",
  cache: new InMemoryCache(),
});


const  App=()=> {
  return (
    <ApolloProvider client={client}>
    
    
      <BrowserRouter>
      <div>
        <Header/>
     
      <Routes>
        <Route exact path={"/"} element ={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/Signup"} element={<Signup/>}/>
        <Route path={"/dashboard"} element ={<Dashboard/>}/>
        <Route path={"/onboarding"} element ={<OnBoarding/>}/>
        <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
            
       
      </Routes>
      
      </div>
        
      <Footer/>  
      </BrowserRouter>
 
    </ApolloProvider>
  );
}

export default App;
