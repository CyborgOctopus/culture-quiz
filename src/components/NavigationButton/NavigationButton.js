import './NavigationButton.css';

export const NavigationButton = ({ text, status }) => {
    return (
        <div className='NavigationButton'>
            <div className={'button-' + status}>
                {text}
            </div>
        </div>
    );
};
