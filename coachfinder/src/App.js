import logo from './components/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
import HomeComponent from './components/home';
import SearchComponent from './components/search';
import AppointmentsScreen from './components/appointmentScreen';
import MessageComponent from './components/Message';
import CoachComponent from './components/coachProfile'
import TraineeComponent from './components/traineeProfile'
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

        <Routes>
          <Route path='login' element={<LoginComponent />} />
          <Route path='home' element={<HomeComponent />} />
          <Route path='search' element={<SearchComponent />} />
          <Route path='register' element={<RegisterComponent />} />
          <Route path='appointment' element={<AppointmentsScreen />} />
          <Route path='message' element={<MessageComponent />} />
          <Route path='trainee' element={<TraineeComponent />} />
          <Route path='coach' element={<CoachComponent />} />
          <Route path='*' element={<HomeComponent />} />
        </Routes>

      }
    </div>
  );
}

export default App;