import React, { useEffect, useRef } from 'react';
import PriceToken from '../components/PriceToken';
import ReflectionRates from '../components/ReflectionRates';
import Tokenomics from '../components/Tokenomics';
import MyParticles from '../components/Particles';


//@ts-ignore
import './Home.css';
import '../components/Particle.css';


const viewWhitePaper = () => {
  window.open('Spore_community_Whitepaper.pdf')
}

const Home = () => {
  const scrollTopRef = useRef<any>()

  const handleScrollEvent = (e: any) => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      scrollTopRef.current.classList.add('show')
    } 
    else if (scrolled <= 300) {
      scrollTopRef.current.classList.remove('show')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return (
    <>
      <MyParticles />
      <div className="jumbotron">
        <div className="row w-100 h-100 mx-0">
        <div className="container mx-0">
          <div className="inner-header w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="title-jumbotron">Welcome to <b>SPORE</b></h1>
            <div className="text-kecil">
              <h3>A community of artists, developers and anarchists redefining the concept of blockchain development.</h3>
              <h3>Upload your art and ideas into <b>SPORE!</b></h3>
            </div>
            <div className="tombol-chart">
                <a href="#buynow" className="btn btn-dark btn-buy-now">Buy Now</a>
                <button type="button" className="btn btn-warning btn-view-white-paper" onClick={viewWhitePaper}>View White Paper</button>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="banners">
        <div className="banner-arts">

        </div>
      </div>

      <div className="banners-mobile">
        <div className="banner-arts">

        </div>
      </div>

      <div className="What-is">
        <div className='container information py-5'>
          <div className='row'>
            <div className="judul-roadmap margin-b">
              <h1 className="text-roadmap">What is <b className="upper">Spore</b> ?</h1>
              <h3 className="p-roadmap">What do you think about Spore</h3>
            </div>
            <div className='col-md-7'>
              {/* <h2 className='feature pb-4'>
              What is <span>Spore</span>?
            </h2> */}
              <p className='lead'>
                Spore is an ecosystem that includes
              </p>
              <ul className='lead'>
                <li><b>Reflect Tokens</b></li>
                <li><b>Algorithmically Generated NFTs</b></li>
                <li><b>Next-gen NFT Prediction Market</b></li>
              </ul>
              {/* <blockquote className='lead'>
              Meet Spore <img width="52px" height="52px" className='img-fluid' alt='Burn Token' src='spore_256.png' />
            </blockquote> */}

              <div className='lead larger'>
                <PriceToken></PriceToken>
              </div>
              <dl className='lead'>

                <h3>The current SPORE burn rate is :</h3>
                <dd>On every Avalanche transaction <img height="30px" width="30px"
                  src='avalanche-logo.png' alt='Avalanche Network'></img></dd>
                <ReflectionRates></ReflectionRates>
                <dd>On Every BSC Transaction <img height="30px" width="30px" src='binance-logo.png' alt="Binance Smart Chain"></img> </dd>
                <dt>6% is Burned</dt>
              </dl>

              <p className='lead'>
                Frictionless rewards will decrease infinitely as tokens continue to burn.
              </p>
              <p className='lead'>
                All holders enjoy the ever-decreasing circulating supply.
              </p>
            </div>
            <div className='col-md-5 text-right'>
              <img className='img-fluid mobile' alt='Mushroom' src='mushroom.gif' />
            </div>
          </div>
        </div>

      </div>


      <Tokenomics />

      <div className="moon">
        <img src="moon.png" className="moonspore" alt=""></img>
      </div>
      <div className="roadmap-outer" id="roadmaps">
        <img src="bgspore.png" className="bgspore" alt=""></img>
        <img src="sporelamp.png" className="sporelamp" alt=""></img>
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="judul-roadmap margin-r">
              <h1 className="text-roadmap"><b>SPORE's Roadmap</b></h1>
              <h3 className="p-roadmap">What we'll be up to in 2021</h3>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12">
              <img src="rocketspore.png" className="rocketspore" alt=""></img>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12 m-time">
              <section className="timelines">
                <div className="roadmap">
                  <div className="container">
                    <ul>
                      <li></li>
                      <li>
                        <div>
                          <time>Fair and Stealth Launch</time><p>March 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Setting up Airdrops & Incentive Program</time><p>20 March 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Second Layer Blockchain Development + Bridge ( Binance Smart Chain )</time><p>6 April 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Farming Partnerships</time> <p>12 April 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Algorithmically Generated NFTs</time> <p>May 17 2021 <img className="checklist" src="big-check-mark.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Governance</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>Cross-chain compatibility</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <time>NFTs Prediction Market</time> <p>In Progress <img className="checklist" src="loading.svg" alt=""></img></p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="row-alt text-center logo-pendukung buy-bg" id="buynow">
        <div className="container logo-pendukung buy-bg">
          <div className="judul-roadmap buyon">
            <h1 className="text-roadmap"><b>Buy On</b></h1>
            <h3 className="p-roadmap p-m">SPORE is crosschain and now available on</h3>
          </div>
          <div className="row medium-row align-items-lg-center">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="pancake.png" className="pancakeswap-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">

              <a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="pangolin.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>

              <p className="p-buy">AVAX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-alt text-center logo-pendukung live-bg" id="livecahrts">
        <div className="container logo-pendukung live-bg">
          <div className="judul-roadmap buyon">
            <h1 className="text-roadmap"><b>Live Chart</b></h1>
            <h3 className="p-roadmap p-m">Live chart SPORE</h3>
          </div>
          <div className="row medium-row align-items-lg-center">
            <div className="col-sm-4">
              <a href="https://info.pangolin.exchange/#/token/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="pangolin.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">AVAX</p>
            </div>
            <div className="col-sm-4">

              <a href="https://charts.bogged.finance/?token=0x33A3d962955A3862C8093D1273344719f03cA17C" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="bogtools_logo_white-1024x30.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
            <div className="col-sm-4">

              <a href="https://dex.guru/token/0x33a3d962955a3862c8093d1273344719f03ca17c-bsc" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="dex-guru.png" className="mobile-image" height="60" alt="BSC Scan"></img>
              </a>
              <p className="p-buy">BSC Chain</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row-alt text-center logo-pendukung">
        <div className="container-fluid logo-pendukung">
          <div className="row medium-row align-items-lg-center">
            <div className="col-12">
              <a href="https://bscscan.com/token/0x33a3d962955a3862c8093d1273344719f03ca17c" rel="noreferrer"  target="_blank" className="d-inline-block m-3">
                <img src="BscScan-logo-light.png" height="37" alt="BSC Scan"></img>
              </a>
              <a href="https://cchain.explorer.avax.network/address/0x6e7f5C0b9f4432716bDd0a77a3601291b9D9e985/transactions" rel="noreferrer" target="_blank" className="d-inline-block m-3">
                <img src="avalanches.png" height="37" alt="Avalanche"></img>
              </a>
              <a href="https://coinmarketcap.com/currencies/spore/" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="coin-marketcap.png" height="37" alt="Coin marketcap"></img>
              </a>
              <a href="https://www.coingecko.com/en/coins/spore" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="gecko.png" height="37" alt="Coin Gecko"></img>
              </a>
              <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="pancake.png" height="37" alt="PancakeSwap"></img>
              </a>
              <a href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" className="d-inline-block m-3" rel="noreferrer">
                <img src="pangolin.png" height="37" alt="Pangolin"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="upbutton" ref={scrollTopRef}>
        <a href="#home"><img src="up-button.png" alt="Up Button" /></a>
      </div>
    </>
  )
}

export default Home