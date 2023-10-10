import { connectWallet } from '../../Adulam'
import { truncate, useGlobalState } from '../../store'
import { useEffect, useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false)
  const [position, setPosition] = useState(0);

  const menutoggle = (state) => {
    setMenu(state)
  }

  return (
    <nav className={`navbar`}>
      <div className='Logo'>LOGO</div>

      <div className={`nav ${menu ? 'active' : 'no_active'}`}>
        <button className={`${location.pathname === '/app/mint' ? 'active' : ''}`}><Link to={'/app/mint'}>Mint</Link></button>
        <button className={`${location.pathname === '/app/ranking' ? 'active' : ''}`}><Link to={'/app/ranking'}>Ranking</Link></button>
        <button className={`${location.pathname === '/app/stake' ? 'active' : ''}`}><Link to={'/app/stake'}>Stake</Link></button>
      </div>
      {menu ? <button className="menu" onClick={() => menutoggle(false)}>CLose</button> : <button className="menu" onClick={() => menutoggle(true)}>Menu</button>}


      {connectedAccount ? (
        <button className='connectwallet'
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className='connectwallet'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
