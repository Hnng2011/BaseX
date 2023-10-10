import { lazy, Suspense } from 'react';
import './mainpage.css';
import Medium from '../assets/medium.png';
import Twitter from '../assets/twitter.png';
import Discord from '../assets/discord.png';
import Docs from '../assets/document.png';

const Home = lazy(() => import('./Mainpage/Home'));
const About = lazy(() => import('./Mainpage/About'));
const Roadmap = lazy(() => import('./Mainpage/Roadmap'));
const Team = lazy(() => import('./Mainpage/Team'));
const Partnership = lazy(() => import('./Mainpage/Partnership'));
const Footer = lazy(() => import('./Mainpage/Footer'));




const Mainpage = () => {
    return (
        <>
            <div class="star"></div>
            <div class="meteor-1"></div>
            <div class="meteor-2"></div>
            <div class="meteor-3"></div>
            <div class="meteor-4"></div>
            <div class="meteor-5"></div>
            <div class="meteor-6"></div>
            <div class="meteor-7"></div>
            <div class="meteor-8"></div>
            <div class="meteor-9"></div>
            <div class="meteor-10"></div>
            <div class="meteor-11"></div>
            <div class="meteor-12"></div>
            <div class="meteor-13"></div>
            <div class="meteor-14"></div>
            <div class="meteor-15"></div>


            <div className='mainpage-community'>
                <a href='https://twitter.com/BaseXNFT' target='_blank'><img src={Medium}></img></a>
                <a href='https://twitter.com/BaseXNFT' target='_blank'><img src={Twitter}></img></a>
                <a href='https://discord.gg/9Rg43PTNNA' target='_blank'><img src={Discord}></img></a>
                <a href='https://twitter.com/BaseXNFT' target='_blank'><img src={Docs}></img></a>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <Home />
                <About />
                <Roadmap />
                <Team />
                <Partnership />
                <Footer />
            </Suspense>
        </>
    )
}

export default Mainpage