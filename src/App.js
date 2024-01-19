import './App.scss';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="app">
      <ToastContainer
        limit={3}
        newestOnTop={true}
        autoClose={3000}
        theme="light"
      />
      Hello!
    </div>
  );
}

export default App;
