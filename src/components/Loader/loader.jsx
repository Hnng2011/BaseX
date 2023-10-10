import './loader.css'
import Lottie from 'lottie-react';
import animationData from '../../store/MlrLPdDka5.json';
import { useEffect, useState } from 'react';


const characterDelay = 20; // Độ trễ giữa các ký tự (milliseconds)

function LoadingEffect() {
    const [animatedText, setAnimatedText] = useState(''); // Mã mới

    useEffect(() => {
        let currentPercentage = 1; // Bắt đầu từ 1%

        const interval = setInterval(() => {
            setAnimatedText(currentPercentage + '%');
            currentPercentage++;
            if (currentPercentage > 100) {
                clearInterval(interval);
            }
        }, characterDelay);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div className='text'>{animatedText} Loading</div>;
}


const loader = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className={`back ${showLoader ? 'load' : ''}`}>
                <Lottie animationData={animationData} />
                <LoadingEffect />
            </div>
        </>
    )
}

export default loader