
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
import Discussion from './pages/Discussion'
import Comments from './pages/Comments'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './component/Profile'


//getting images through URL constructor which are not in public folder
//const backGround=new URL("./images/picture2.png",import.meta.url)
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  console.log('token: '+ token)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // link: from([errorLink, authLink.concat(httpLink)]),
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
            <Route path={"/discussion"} element={<Discussion />} />
            <Route path={"/me"} element={<Profile />} />
            <Route path={"/comments"} element={<Comments />} />
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

// export default function App() {
//   const { data, loading, error } = useQuery(QUERY_USERS);
//   if (loading) return "Loading...";
//   if (error) return <pre>{error.message}</pre>
//   return (
//     <div>usersList{users}
//       <h1>All users=</h1>
//     </div>
//   );
// }