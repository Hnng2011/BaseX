import React from 'react'
import imgageship1 from '../../assets/ship1.png'
import Arow from '../../assets/right-arrow.svg'
import { useRef, useEffect } from 'react'


const Roadmap = () => {
    const content = useRef(null)
    const active = useRef(null)

    const handleClick = (id) => {
        const contentContainer = content.current;

        if (contentContainer) {
            if (id === 2) {
                contentContainer.scrollLeft = contentContainer.scrollWidth;
            } else {
                contentContainer.scrollLeft = 0;
            }
        }
    };

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > window.innerHeight + window.innerHeight / 2) {
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
        <div ref={active} className="roadmap">
            <img className='ship' src={imgageship1} alt='spaceship' />
            <div className='container-l2'>
                <div ref={content} className='phase-container'>
                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>Phase 1 : Q2 2023</div>
                                <li>Come up with Ideas</li>
                                <li>Assemble Team</li>
                                <li>Test and Check Ideas</li>
                            </div>
                        </div>
                    </div>
                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>Phase 2A : September 2023</div>
                                <li>Social Media launch</li>
                                <li>Website launch</li>
                                <li>BaseX Dapp Testnet</li>
                            </div>
                        </div>
                    </div>

                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>Phase 2B : September - October 2023</div>
                                <li>Launch NFT</li>
                                <li>Community Engagement</li>
                                <li>BaseX Dapp live</li>
                                <li>Mint live</li>
                                <li>Leaderboard is live</li>
                            </div>
                        </div>
                    </div>
                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>Phase 2C : October 2023</div>
                                <li>Mint END</li>
                                <li>Launch NFT burning</li>
                                <li>First distribute for top Rank</li>
                            </div></div>
                    </div>
                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>Phase 3 : Q4 2023</div>
                                <li>Launch the staking</li>
                                <li>Launch tokens BaseX</li>
                                <li>IDO & Listing</li>
                                <li>Launch BaseX tokens and NFT</li>
                            </div></div>
                    </div>
                    <div className='phase'>
                        <div>
                            <div className='phasecontent'>
                                <div className='phaseheader'>2024</div>
                                <li>Launch the 2nd collection to join BaseX-Verse</li>
                            </div></div>
                    </div>
                </div>
                <div className='direction'>
                    <button onClick={() => handleClick(1)}><img src={Arow} /></button>
                    <button onClick={() => handleClick(2)}><img src={Arow} /></button>
                </div>
            </div>
        </div>
    )
}

export default Roadmap