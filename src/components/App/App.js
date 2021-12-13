import './App.css';
import { Question } from '../Question/Question';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Footer } from '../Footer/Footer';

const App = () => {
  return (
    <div className='App'>
        <h1 className='pageTitle'>What Kind of Culture Mind Are You?</h1>
        <div className='displayArea'>
            <ProgressBar />
            <Question />
            <NavigationBar />
        </div>
        <Footer />
    </div>
  );
}

export default App;
