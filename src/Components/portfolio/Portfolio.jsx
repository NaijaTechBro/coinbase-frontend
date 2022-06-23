import React from 'react';
import './portfolio.css';
import icon from '../../assets/btc-chart.svg';
import mockup from '../../assets/mockup.webp';

function Portfolio() {
    return (
        <div className='coinbase__portfolio' >
            <div className='coinbase__portfolio-container'>
                <div className='coinbase__portfolio-header'>
                    <h2>Create your cryptocurrency portfolio today</h2>
                    <p>Coinbase has a variety of features that makes it the best place to start trading</p>
                </div>
                <div className='coinbase__portfolio-container_left'>
                    <div className='coinbase__portfolio-container_left-featuredImage'>
                        <img src={icon} alt="icon" />
                    </div>
                    <div className='coinbase__portfolio-container_left-content'>
                        <h2>Manage your portfolio</h2>
                        <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                    </div>
                </div>

                <div className='coinbase__portfolio-container_left'>
                    <div className='coinbase__portfolio-container_left-featuredImage'>
                        <img src={icon} alt="icon" />
                    </div>
                    <div className='coinbase__portfolio-container_left-content'>
                        <h2>Recurring Buys</h2>
                        <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                    </div>
                </div>

                <div className='coinbase__portfolio-container_left'>
                    <div className='coinbase__portfolio-container_left-featuredImage'>
                        <img src={icon} alt="icon" />
                    </div>
                    <div className='coinbase__portfolio-container_left-content'>
                        <h2>Value Protection</h2>
                        <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
                    </div>
                </div>

                <div className='coinbase__portfolio-container_left'>
                    <div className='coinbase__portfolio-container_left-featuredImage'>
                        <img src={icon} alt="icon" />
                    </div>
                    <div className='coinbase__portfolio-container_left-content'>
                        <h2>Mobile Apps</h2>
                        <p>Stay on top of the markets with the Coinbase app for <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.coinbase.android">Android</a>
                            or <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730">iOS</a>.</p>
                    </div>
                </div>

                <div className='coinbase__portfolio-container_right'>
                    <div className='coinbase__portfolio-container_right-featureImage'>
                        <img src={mockup} alt="mockup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio