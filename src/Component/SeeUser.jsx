import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SeeUser = () => {
  const abc =useLoaderData();
  console.log(abc);
 
    return (
        <div>
            <h2>All User</h2>
            <h4> Total User:{abc.length}  </h4>
            <div>
              {
                abc.map(user=> <p key={user._id}> Name: {user.name}  Email: {user.email}   <button>X</button> </p>)
              }
            </div>
        </div>
    );
};

export default SeeUser;