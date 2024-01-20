import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as route from './services/route'
import { ListOfAlbums, ListOfUsers } from './pages';
import { ListOfPosts } from './pages/listOfPosts/ListOfPosts';
import { Navbar } from './components';

function App() {
  return (
    <div className="app container">
      <ToastContainer
        limit={3}
        newestOnTop={true}
        autoClose={3000}
        theme="light"
      />
      <Navbar/>
      <Routes>
        <Route path={route.users} element={<ListOfUsers />}/>
        <Route path={`${route.posts}/:userId`} element={<ListOfPosts />}/>
        <Route path={`${route.users}/:userId/albums`} element={<ListOfAlbums />}/>
        <Route path="*" element={<Navigate replace to={route.users} />} />
      </Routes>
    </div>
  );
}

export default App;
