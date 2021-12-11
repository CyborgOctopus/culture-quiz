import './NavigationBar.css';
import { NavigationButton } from '../NavigationButton/NavigationButton';

export const NavigationBar = () => {
    return (
        <div>
            <NavigationButton text={'< Prev'}/>
            <NavigationButton text={'Next >'}/>
        </div>
    );
};
