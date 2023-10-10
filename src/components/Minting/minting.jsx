import { setAlert, setGlobalState } from '../../store'
import { mintNFT } from '../../Adulam'
import Video from '../../assets/video.mp4'
import './minting.css'
const minting = () => {
    const handleContextMenu = (event) => {
        event.preventDefault(); // Ngăn chặn hiển thị menu chuột phải
    };
    const onMintNFT = async () => {
        setGlobalState('loading', {
            show: true,
            msg: 'Minting new NFT to your account',
        })

        await mintNFT()
            .then(() => setAlert('Minting Successful...', 'green'))
            .catch(() => { setGlobalState('loading', { show: false, msg: '' }); setAlert('Minting Fails...', 'red') })
    }

    return (
        <div className='Mint'>
            <div className='mintarea'>
                <div className='bg'></div>
                <div className='main'>
                    <video autoPlay loop src={Video} muted onContextMenu={handleContextMenu} type="video/mp4"></video>
                </div>
            </div>

            <div className='mintcontent'>
                <h1>What is BaseX</h1>
                <p>
                    BaseX is a deflationary token. It will be used by BaseX ecosystem applications. The total supply is 210,000,000,000,000,000 tokens. BaseX belongs to everyone in the Arbitrum community and is also a necessary key to unlock the future chapters of the BaseX story.
                </p>
                <p>
                    BaseX has a 8% burning tax, so adjusting your slippage tolerance to around 20% is suggested when buying/selling to ensure your successful transactions. Every time you buy BaseX, you will receive a Lucky Drop ticket with a chance to win an ARB prize based on the purchase amount. You can also stake your BaseX to earn more.
                </p>
                <div className='buttonmint'>

                    <button
                        className="minting"
                        onClick={onMintNFT}>
                        Mint Now
                    </button>
                    <button
                        className="minting"
                    >
                        View Docs
                    </button>
                </div>

            </div>
        </div>
    )
}

export default minting