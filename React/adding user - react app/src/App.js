import React, {useState} from 'react';
import AddUser from './Components/Users/Addusers';
import UsersList from './Components/Users/UsersList';



function App() {
 const [usersList,setUsersList] = useState([])

 const addUserHandler = (uName,uAge) => {
   setUsersList((prevUsersList) => {
    return ([...prevUsersList,{name:uName,age:uAge}])
   });
 }
   
  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
