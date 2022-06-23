import React from 'react';
import chart from '../../assets/chart.png';
import './cointable.css';

const Cointable = () => {
    return (
        <div class="price-table-container">
            <table class="price-table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Change</td>
                        <td>Chart</td>
                        <td>Trade</td>
                    </tr>
                </thead>
                <tbody class="price-table-body">
                    <tr>
                        <td>1</td>
                        <td>
                            <div class="name-container">
                                <img
                                    src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
                                    alt=""
                                />
                                <p>Bitcoin  <span>BTC</span></p>

                            </div>
                        </td>
                        <td>NGN 8,784,598.22</td>
                        <td class="change">-1.97%</td>
                        <td><img src={chart} alt="chart" /> </td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div class="name-container">
                                <img
                                    src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
                                    alt="chart"
                                />
                                <p>Ethereum <span>ETH</span></p>

                            </div>
                        </td>
                        <td>NGN 446,477.91</td>
                        <td class="change">-0.85%</td>
                        <td><img src={chart} alt="chart" /></td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <div class="name-container">
                                <img
                                    src="https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png"
                                    alt=""
                                />
                                <p>Cardano <span>ADA</span></p>

                            </div>
                        </td>
                        <td>NGN 199.99</td>
                        <td class="change">-1.97%</td>
                        <td><img src={chart} alt="chart" class="chart" /></td>
                        <td><button>Buy</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <div class="name-container">
                                <img
                                    src="https://dynamic-assets.coinbase.com/d2ba1ad058b9b0eb4de5f0ccbf0e4aecb8d73d3a183dbaeabbec2b6fd77b0a636598e08467a05da7e69f39c65693f627edf7414145ee6c61e01efc831652ca0f/asset_icons/8733712db93f857c04b7c58fb35eafb3be360a183966a1e57a6e22ee5f78c96d.png"
                                    alt="chart"
                                />
                                <p>Solana  <span>SOL</span></p>

                            </div>
                        </td>
                        <td>NGN 12,456.57</td>
                        <td class="change">-4.98%</td>
                        <td><img src={chart} alt="chart" /></td>
                        <td><button>Buy</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cointable