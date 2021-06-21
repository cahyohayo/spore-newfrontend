import './Header.css';

import React from 'react';
import Web3 from 'web3';

const win = window as any
const connectMetaMask = () => {
  if (win.ethereum) {
    win.web3 = new Web3(win.ethereum);
    win.ethereum.enable();
  }
}

const claimAirdrop = async (e: any) => {
  e.preventDefault();
  connectMetaMask();
  const ABI = [
    {
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [
        { type: 'address', name: 'contrak', internalType: 'contract IERC20' }
      ]
    },
    {
      type: 'event',
      name: 'Deposit',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        {
          type: 'address',
          name: 'previousOwner',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'address',
          name: 'newOwner',
          internalType: 'address',
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: 'event',
      name: 'Withdraw',
      inputs: [
        {
          type: 'address',
          name: 'user',
          internalType: 'address',
          indexed: true
        },
        {
          type: 'uint256',
          name: 'pid',
          internalType: 'uint256',
          indexed: false
        },
        {
          type: 'uint256',
          name: 'amount',
          internalType: 'uint256',
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'balance',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
      name: 'contractaddress',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'deposit',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'get',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address' }],
      name: 'owner',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'renounceOwnership',
      inputs: []
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'transferOwnership',
      inputs: [{ type: 'address', name: 'newOwner', internalType: 'address' }]
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'update',
      inputs: [{ type: 'uint256', name: '_amount', internalType: 'uint256' }]
    }
  ];
  const fairyContract = new win.web3.eth.Contract(
    ABI,
    '0xeAdf7D005596dbad55e067C1208080f83258D452'
  );
  var account = await win.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  try {
    await fairyContract.methods
      .get()
      .send({ from: account, gasPrice: 225000000000, gas: 200000 });
  } catch (error) {
    alert(error);
  }
}

const Header = () => {
  return (

    <header className='header'>
      <nav className="navbar fixed-top navbar-light navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="spore_128.png" alt="" width="175" height="50" className="d-inline-block align-text-top"></img>
          </a>
          <span className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i className="fa fa-bars"></i>
          </span>
          <ul className="nav justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title='Spore Avalanche-BSC Bridge' data-bs-toggle="modal" href="#exampleModalToggle" role="button">Bridge</a>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Buy Now</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" rel="noreferrer">Buy On BSC</a></li>
                <li><a className="dropdown-item" href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noreferrer">Buy On Avalanche</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">NFTs</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/nft" >Market</a></li>
                <li><a className="dropdown-item" href="/gallery" >Gallery</a></li>
                <li><a className="dropdown-item" href="/coming-soon" >Giveaway</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmaps">Roadmap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/team">Meet Team</a>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Docs</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./pdf/how-to-buy.pdf" target="_blank">How to Buy ( PDF )</a></li>
                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=wK4vvE44Pfw" target="_blank" rel="noreferrer">How to Buy ( Video )</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="btn btn-primary claimair" onClick={claimAirdrop}><b>Claim Airdrop</b></span>
            </li>

          </ul>
        </div>
      </nav>


      <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <a className="navbar-brand" href="/">
            <img src="spore_128.png" alt="" width="175" height="50" className="d-inline-block align-text-top"></img>
          </a>
          <span className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa fa-times"></i></span>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title='Spore Avalanche-BSC Bridge' data-bs-toggle="modal" href="#exampleModalToggle" role="button">Bridge</a>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Buy Now</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x33a3d962955a3862c8093d1273344719f03ca17c" target="_blank" rel="noreferrer">Buy On BSC</a></li>
                <li><a className="dropdown-item" href="https://app.pangolin.exchange/#/swap?inputCurrency=0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985" target="_blank" rel="noreferrer">Buy On Avalanche</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">NFTs</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/nft">Market</a></li>
                <li><a className="dropdown-item" href="/gallery">Gallery</a></li>
                <li><a className="dropdown-item" href="/coming-soon">Giveaway</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Spore_community_Whitepaper.pdf">Whitepaper</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roadmaps" data-bs-dismiss="offcanvas" aria-label="Close">Roadmap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/team" data-bs-dismiss="offcanvas" aria-label="Close">Meet Team</a>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Docs</span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./pdf/how-to-buy.pdf" target="_blank" rel="noreferrer">How to Buy ( PDF )</a></li>
                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=wK4vvE44Pfw" target="_blank" rel="noreferrer">How to Buy ( Video )</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="btn btn-primary claimair" onClick={claimAirdrop}><b>Claim Airdrop</b></span>
            </li>

          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

