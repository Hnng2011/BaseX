import React from 'react'
import base from '../../assets/base.jpg'
import imgageship2 from '../../assets/ship2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Popup = ({ message, onClose, index }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div className="popup" data-index={index}>
            {message}
        </div>
    );
};

const Home = () => {
    const [popups, setPopups] = useState([]);
    let n = 0;

    const addPopup = () => {
        const newPopup = <Popup key={popups.length} message={"Coming Soon!"} onClose={removePopup} index={n} />;
        setPopups([...popups, newPopup]);
        n++;
    };

    const removePopup = (popupKey) => {
        setPopups(popups.filter((_, index) => index !== popupKey));
        n--;
    };

    return (
        <div className="glitch-wrapper">
            {popups.map((popup, index) => (
                <React.Fragment key={index}>{popup}</React.Fragment>
            ))}
            <img className='ship' src={imgageship2} alt='spaceship' />
            <div className="glitch" data-glitch="BaseX">BaseX</div>
            <div className='mainpage'>
                <h1>Build On Base</h1>
                <img src={base} />
            </div>
            <button className='launch-app-button' onClick={() => addPopup()}><Link to=''>Launch App</Link></button>
        </div>
    )
}

export default Home