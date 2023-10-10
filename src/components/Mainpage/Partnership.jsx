import img1 from '../../assets/image1.webp'
import img2 from '../../assets/image2.webp'
import img3 from '../../assets/image3.webp'
import img4 from '../../assets/image4.webp'
import img5 from '../../assets/image5.webp'
import img6 from '../../assets/image6.webp'
import img7 from '../../assets/image7.webp'
import img8 from '../../assets/image8.webp'
import { useEffect, useRef } from 'react'


const Partnership = () => {
    const active = useRef(null)
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > window.innerHeight * 3 + window.innerHeight / 2) {
                active.current.classList.add("active");
            } else {
                active.current.classList.remove("active");
            }
        }

        window.addEventListener('scroll', handlescroll)

        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, [])

    return (
        <div ref={active} className="partnership">
            <div className='container-l2'>
                <h1>Partnership & Investor</h1>
                <div className='partnership-container'>
                    <div className='line'>
                        <img src={img1}></img>
                        <img src={img2}></img>
                        <img src={img3}></img>
                    </div>
                    <div className='line'>
                        <img src={img4}></img>
                        <img src={img5}></img>
                    </div>
                    <div className='line'>
                        <img src={img6}></img>
                        <img src={img7}></img>
                        <img src={img8}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership