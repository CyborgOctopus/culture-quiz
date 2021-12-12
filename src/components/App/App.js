import './App.css';
import { Question } from '../Question/Question';
import { NavigationBar } from '../NavigationBar/NavigationBar';

const App = () => {
  return (
    <div className='App'>
        <h1 className='pageTitle'>What Kind of Culture Mind are You?</h1>
        <div className='displayArea'>
            <Question />
            <NavigationBar />
        </div>
    </div>
  );
}

export default App;
