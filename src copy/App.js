import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteUser = (id) => {
    const newUserList = usersList.filter(user => user.id !== id);
    setUsersList(newUserList)

  }
  const clearUsers = () => {
    setUsersList([])
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList  setUserList={setUsersList} users={usersList} deleteUser={deleteUser} clearUsers={clearUsers} />
    </div>
  );
}

export default App;