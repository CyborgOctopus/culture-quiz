import './NavigationBar.css';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const NavigationBar = ({ onPrevButtonPress, onNextButtonPress }) => {
    return (
        <div className='NavigationBar'>
            <NavigationButton text={'< Prev'} onButtonPress={onPrevButtonPress} />
            <NavigationButton text={'Next >'} onButtonPress={onNextButtonPress} />
        </div>
    );
};
