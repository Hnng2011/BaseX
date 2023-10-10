import React, { useEffect } from 'react'
import { useRef } from 'react'

const About = () => {
    const active = useRef(null)

    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
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
        <div ref={active} className="about">
            <div className='container-l2'>
                <div className='aboutcontainer'>
                    <div className='aboutcontent'>
                        <h1>About Us</h1>
                        <h2>What is  BaseX ?</h2>
                        <div>
                            BaseX NFT: Where Digital Art Comes Alive!
                        </div>
                        <div>
                            BaseX NFT isn't just an NFT platform; it's an adventure where digital art thrives like never before. Experience innovation, memorable moments, and the exquisite blend of art and blockchain technology. Join our creative community now!
                        </div>
                    </div>
                </div>
                <div className='aboutcontainer'>
                    <div className='aboutcontainergrid'>
                        <div className='aboutcontentgrid'>
                            <h1>🎨 Diversity in Digital Art:</h1>
                            <div>BaseX NFT brings digital art to life with a wide range of unique creations, including digital paintings, videos, and creative digital artworks</div>
                        </div>

                        <div className='aboutcontentgrid'>
                            <h1>🔒 Sustainability and Blockchain Integration:</h1>
                            <div>Every BaseX NFT is securely encrypted and stored on the blockchain, guaranteeing their uniqueness and true ownership</div>
                        </div>

                        <div className='aboutcontentgrid'>
                            <h1>🌐 Community Connection</h1>
                            <div>BaseX NFT is not just a platform; it's also a community passionate about digital art and blockchain enthusiasts</div>
                        </div>

                        <div className='aboutcontentgrid'>
                            <h1>💎 Investment Opportunities:</h1>
                            <div>NFTs can be valuable investments, and BaseX NFT provides opportunities for investors and collectors alike</div>
                        </div>

                        <div className='aboutcontentgrid'>
                            <h1>🚀 Outstanding Utilities:</h1>
                            <div>BaseX NFTs unlock access to exclusive events, the Metaverse, and decentralized projects, going beyond simple art ownership</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About