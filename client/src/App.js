import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router} from   'react-router-dom'
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
    }, [dispatch])
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <AllRoutes/>
         
      </Router>
    </div>
  );
}

export default App;
