import './App.css';
import { Question } from '../Question/Question';
import { NavigationBar } from '../NavigationBar/NavigationBar';

const App = () => {
  return (
    <div className='App'>
        <h1 className='pageTitle'>What Kind of Culture Mind are You?</h1>
        <br/>
        <Question />
        <NavigationBar />
    </div>
  );
}

export default App;
