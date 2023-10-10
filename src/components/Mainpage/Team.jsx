import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Artist from '../../assets/artist.png'
import CoFounder from '../../assets/cofounder.png'
import Founder from '../../assets/founder.png'
import Web3 from '../../assets/web3.png'
import Advisor from '../../assets/advisor.png'
import Marketing from '../../assets/marketing.png'
import Collab from '../../assets/collab.png'

const Team = () => {
    const [source, setSource] = useState(Artist)
    const [name, setName] = useState('Mask Joyce - Founder BaseX')
    const [active, setActive] = useState(0)
    const Active = useRef(null)


    const change = (src, name, id) => {
        setSource(src)
        setName(name)
        setActive(id)
    }

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > window.innerHeight * 2 + window.innerHeight / 2) {
                Active.current.classList.add("active");
            } else {
                Active.current.classList.remove("active");
            }
        }

        window.addEventListener('scroll', handlescroll)

        return () => {
            window.removeEventListener('scroll', handlescroll);
        };
    }, [])

    return (
        <div ref={Active} className="team">
            <div className='container-l2'>
                <div className='teamimage'>
                    <img src={source} />
                </div>
                <div className='selectionheader'>
                    <h1>Our Team</h1>
                    <h2>{name}</h2>
                </div>
                <div className='team-container'>
                    <div onMouseEnter={() => change(Founder, 'Mask Joyce - Founder BaseX', 0)} className={`selection ${active === 0 ? 'active' : ''}`} datasource={Founder} ></div>
                    <div onMouseEnter={() => change(CoFounder, 'Dr.Strange - CoFounder BaseX', 1)} className={`selection ${active === 1 ? 'active' : ''}`}></div>
                    <div onMouseEnter={() => change(Collab, 'Avis - Collab Manager', 2)} className={`selection ${active === 2 ? 'active' : ''}`}></div>
                    <div onMouseEnter={() => change(Marketing, 'Natas - Lead Marketing', 3)} className={`selection ${active === 3 ? 'active' : ''}`}></div>
                    <div onMouseEnter={() => change(Artist, 'Sarah - Artist', 4)} className={`selection ${active === 4 ? 'active' : ''}`}></div>
                    <div onMouseEnter={() => change(Web3, 'Ethan - Web3 Developer', 5)} className={`selection ${active === 5 ? 'active' : ''}`}></div>
                    <div onMouseEnter={() => change(Advisor, 'Daniel - Advisor', 6)} className={`selection ${active === 6 ? 'active' : ''}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Team