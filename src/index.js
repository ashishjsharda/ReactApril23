import React from 'react';
import ReactDOM from 'react-dom';

function fullName(user)
{
  return <h1> First Name is {user.firstName}  and last name is {user.lastName}</h1>
}
let user={
  firstName:'Ashish',
  lastName:'Sharda'
};
const element = fullName(user)

ReactDOM.render(
      element
    
 , document.getElementById('root')
);
