/* eslint-disable react/prop-types */
// import React from 'react'

const ShowData = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Password: {user.password}</h1>
    </div>
  );
};

export default ShowData;
