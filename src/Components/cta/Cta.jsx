import React from 'react';
import './cta.css';
import eth from '../../assets/eth.png';

function Cta() {
    return (
        <div className='coinbase__cta' >
            <div className='coinbase__cta-container-left'>
                <h2>Earn up to $13 worth of <br />crypto</h2>
                <p>Discover how specific cryptocurrencies work — and <br /> get a bit of each crypto to try out for yourself.</p>
                <button className='coinbase__cta-container-left_button'>Start Earning</button>
            </div>
            <div className='coinbase__cta-container-right'>
                <div className='coinbase__cta-contentfield'>
                    <div className='coinbase__cta-contentfield_left'>
                        <img src={eth} alt="eth" />
                        <h3>The Graph</h3><span>GRT</span>
                    </div>
                    <div className='coinbase__cta-container-right'>
                        <b>Earn $4 GRT</b>
                    </div>
                </div>

                <div className='coinbase__cta-contentfield'>
                    <div className='coinbase__cta-contentfield_left'>
                        <img src={eth} alt="eth" />
                        <h3>Amp</h3><span>AMP</span>
                    </div>
                    <div className='coinbase__cta-container-right'>
                        <b>Earn $3 AMP</b>
                    </div>
                </div>


                <div className='coinbase__cta-contentfield'>
                    <div className='coinbase__cta-contentfield_left'>
                        <img src={eth} alt="eth" />
                        <h3>Eternity Chain </h3><span>GRT</span>
                    </div>
                    <div className='coinbase__cta-container-right'>
                        <b>Earn $3 ERN</b>
                    </div>
                </div>

                <div className='coinbase__cta-contentfield'>
                    <div className='coinbase__cta-contentfield_left'>
                        <img src={eth} alt="eth" />
                        <h3>Wrapped Ampleforth</h3><span>WAMPL</span>
                    </div>
                    <div className='coinbase__cta-container-right'>
                        <b>Earn $3 WAMPL</b>
                    </div>
                </div>
                <a href='#b'>View More</a>
            </div>
        </div>
    )
}

export default Cta


