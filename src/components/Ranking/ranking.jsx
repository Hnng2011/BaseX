import './ranking.css'
import { truncate, useGlobalState } from '../../store';
import { useEffect, useState } from 'react';
import one from '../../assets/1st-prize.png'
import two from '../../assets/2nd-place.png'
import three from '../../assets/3rd-place.png'

const Rankprofile = (data) => {
    const { index } = data


    return (
        <div className='rankprofile'>
            <div>{index + 1}</div>
            <div>
                <div>
                    {truncate(data.user_address, 6, 4, 13)}
                </div>
                {index == 0 ? <img src={one} /> : index == 1 ? <img src={two} /> : index == 2 ? <img src={three} /> : ""}
            </div>
            <div>{data?.total_point || data?.total_referral}</div>
        </div>
    );
};

const ranking = () => {
    const [connectedAccount] = useGlobalState('connectedAccount')
    const [ref, setRef] = useState('')
    const [num, setNumber] = useState(10)
    const [account, setAccount] = useState('')
    const [top_ref, setTop_ref] = useState([{ user_address: null, total_referral: null }])
    const [top_point, setTop_point] = useState([{ user_address: null, total_point: null }])
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])


    const handleCopy = () => {
        navigator.clipboard.writeText(ref);
    };

    const handleloadmore = () => {
        setNumber((prevNum) => (prevNum < 50 ? prevNum + 10 : 50));
        if (top_point[0].user_address !== null) {
            setData(top_point?.slice(0, num + 10));
            setData2(top_ref?.slice(0, num + 10));
        }
    }

    useEffect(() => {
        if (connectedAccount) {
            const currentURL = window.location.origin + window.location.search;
            const curref = currentURL + '?referfal=' + connectedAccount
            setRef(curref)
        }
        fetchData()

    }, [connectedAccount])


    const fetchData = async () => {
        fetch(`https://api.basex.space/point/total_point?user_address=${connectedAccount}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Lỗi khi gọi API');
                }
            })
            .then(data => {
                setAccount(data?.data)
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });


        fetch(`https://api.basex.space/point/top_referral?top=3`)
            .then(response => {
                if (response.ok) {

                    return response.json();
                } else {
                    throw new Error('Lỗi khi gọi API');
                }
            })
            .then(data => {
                setTop_ref(data?.data.user)
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });


        fetch("https://api.basex.space/point/top_point?top=3")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Lỗi khi gọi API');
                }
            })
            .then(data => {
                setTop_point(data?.data.user)
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
    };


    return (
        <div className='Ranking'>
            <div className='yourrank'>
                <div className='myaccount'>
                    <h2>Address: </h2>
                    <div>
                        {connectedAccount ? truncate(connectedAccount, 6, 6, 15) : 'Null'}
                    </div>
                </div>

                <div className='mypoints'>
                    <h2>My Points:</h2>

                    <div>
                        {connectedAccount ? account?.total_point : 'Null'}
                    </div>
                </div>

                <div className='myref'>
                    <div>
                        <h2>My Ref : </h2>
                        <div>
                            {connectedAccount ? account?.total_referral : 'Null'}
                        </div>
                    </div>
                    <div>
                        <h2>
                            Ref Links:
                        </h2>
                        <div>
                            {connectedAccount ? truncate(ref, 13, 3, 22) : 'Null'}
                        </div>
                        <button onClick={handleCopy}>Copy</button>
                    </div>

                </div>
            </div>
            <div className='ranklistpoints'>
                <h1>Points Leader Board</h1>
                <div className='rankprofile header'>
                    <div>No.</div>
                    <div>Address</div>
                    <div>Points</div>
                </div>
                {
                    data.map((data, index) => {
                        return (
                            <div key={index} className={`${index == 0 ? 'pink' : index == 1 ? 'green' : index == 2 ? 'blue' : ''}`}>
                                <Rankprofile {...data} index={index} />
                            </div>)
                    })
                }

            </div>

            <div className='ranklistref'>
                <h1>Referal Leader Board</h1>
                <div className='rankprofile header'>
                    <div>No.</div>
                    <div>Address</div>
                    <div>Ref</div>
                </div>
                {
                    data2.map((data, index) => {
                        return (
                            <div key={data.no} className={`${index == 0 ? 'pink' : index == 1 ? 'green' : index == 2 ? 'blue' : ''}`}>
                                <Rankprofile {...data} index={index} />
                            </div>)
                    })
                }
            </div>

            <button onClick={() => handleloadmore()} className='btn-load-more'>Load More</button>
        </div >
    )
}

export default ranking