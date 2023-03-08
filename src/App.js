import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Routes,Route } from 'react-router-dom';
import {CreateUsers} from './createUsers'
import { AddUser } from './addUser';
import { EditUser } from './editUser';

function App() {
  return (
    <div className='container'>
    <Routes>
      <Route path="/create-user" element={<CreateUsers/>}/>
      <Route path="/add-user" element={<AddUser/>}/>
      <Route path="/edit-user/:id" element={<EditUser/>}/>
    </Routes>
    </div>
  );
}

export default App;
