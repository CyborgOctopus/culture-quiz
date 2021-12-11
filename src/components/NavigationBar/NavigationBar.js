import './NavigationBar.css';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const NavigationBar = () => {
    return (
        <div className='NavigationBar'>
            <NavigationButton text={'< Prev'}/>
            <NavigationButton text={'Next >'}/>
        </div>
    );
};
