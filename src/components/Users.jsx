import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

  const handleAddUser = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email)

    const newUser = {name, email};

    // send data to the server
    fetch('http://localhost:3000/users', {
        method: 'POST', 
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('After Post',data)
    })
  }

  return (
    <div>
      <div>
        <form onSubmit={handleAddUser}>
          <h3>Add a user</h3>
          <input name="name" type="text" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <button>Add user</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
