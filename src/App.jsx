/* import Mint from './components/Minting/minting'
import Alert from './components/Alert'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Stake from './components/Stake/stake'
import Ranking from './components/Ranking/ranking'
import Loader from './components/Loader/loader' */
import Header2 from './components/Header/Header2'
import Mainpage from './components/Mainpage'


import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route
          path="/app/*"
          element={
            <>
              <Loader />
              <Header />
              <Routes>
                <Route path="mint" element={<Mint />} />
                <Route path="ranking" element={<Ranking />} />
                <Route path="stake" element={<Stake />} />
              </Routes>
              <Footer />
              <Alert />
            </>
          }
        /> */}
        <Route path='/' element={<><Header2 /><Mainpage /></>} />
      </Routes>

    </div>
  )
}

export default App
