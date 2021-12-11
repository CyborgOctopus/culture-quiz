import './App.css';
import { Question } from '../Question/Question';
import { NavigationBar } from '../NavigationBar/NavigationBar';

const App = () => {
  return (
    <div className="App">
        <h1>What Kind of Culture Mind are You?</h1>
        <Question />
        <NavigationBar />
    </div>
  );
}

export default App;
