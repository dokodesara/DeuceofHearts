import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { QUERY_SINGLE_USER} from "../utils/queries";
const User = (props) => {
let { userId } = props.match.params;
return (
<>
<Query
query={QUERY_SINGLE_USER}
variables={{ userId: userId }}>
{({ loading, error, data }) => {
if (loading) return <h4>Loading...</h4>;
if (error) console.log(error);
const {username, DOB, Gender, email, userId } = data.findUser;
return (
<>
<h1>
<span>Name :</span> {username}
</h1>
<Link
to={{
pathname: `/user/edit/${userId}`,
state: {
name:username,
DOB: dob,
Gender:gender,
email: email,

},
}}>
Edit
</Link>
<h4><u>User Details</u></h4>
<ul>
<li>
<b>Email:</b> {email}
</li>
<li>
<b>:</b> {dob}
</li>
<li>
<b>Gender: </b> {gender}
</li>
</ul>
<hr />
<Link to="/">Back</Link>
</>
);
}}
</Query>
</>
);
};
export default User;