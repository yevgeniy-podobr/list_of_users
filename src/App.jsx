import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as route from './services/route'
import { ListOfUsers } from './pages';
import { ListOfPosts } from './pages/listOfPosts/ListOfPosts';

function App() {
  return (
    <div className="app container">
      <ToastContainer
        limit={3}
        newestOnTop={true}
        autoClose={3000}
        theme="light"
      />
      <Routes>
        <Route path={route.users} element={<ListOfUsers />}/>
        <Route path={`${route.posts}:id`} element={<ListOfPosts />}/>
        <Route path="*" element={<Navigate replace to={route.users} />} />
      </Routes>
    </div>
  );
}

export default App;
