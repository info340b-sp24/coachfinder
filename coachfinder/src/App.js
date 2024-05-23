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
      <>
        <LoginComponent />
        {/* <HomeComponent /> */}
        { /*<SearchComponent /> */} 
        {/* <RegisterComponent /> */}
        {/* { <AppointmentsScreen /> } */}
        {/* <MessageComponent/> */}
        {/* <ProfileComponent/> */}
      </>
      }
    </div>
  );
}

export default App;