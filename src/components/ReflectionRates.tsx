import React, { useState, useEffect  } from 'react';
import Web3 from 'web3'
import { AVAX_SPORE_ABI } from '../utils/SporeAbis';
import { ContractAddesses } from '../utils/addresses';
const win = window as any
win.web3 = new Web3('https://api.avax.network/ext/bc/C/rpc')


const ReflectionRates = () => {
    const [avaBurned, setAvaBurned] = useState(-1)
    const [avaxBridge, setAvaxBridge] = useState(-1)
  
    useEffect(() => {
      async function getInfos() {
        
        await getAvaBurned()
        await getAvaxBridge()

        setInterval(async () => {
          
          await getAvaBurned()
          await getAvaxBridge()
   
        }, 80000)
      }
      getInfos()
  
    }, [])

 
  
  const getAvaBurned = async () => {
    try {
      console.log("getting avax burned tokens");
      const SporeContract = new win.web3.eth.Contract(
        AVAX_SPORE_ABI,
        ContractAddesses.AVAX_SPORE_MAINNET
      );
  
      const avaburn = await SporeContract.methods.balanceOf(ContractAddesses.DEAD_ADDRESS).call();
      setAvaBurned(avaburn / (10 ** 9));
  
    }
    catch (err) {
      console.log("Error getting burned tokens avax")
    }
  }
  
  const getAvaxBridge = async () => {
    try {
      console.log("getting avax bridge tokens");
      const SporeContract = new win.ava.eth.Contract(
        AVAX_SPORE_ABI,
        ContractAddesses.AVAX_SPORE_MAINNET
      );
  
      const avaxbridge = await SporeContract.methods.balanceOf(ContractAddesses.AVAX_BRIDGE_MAINNET).call();
      setAvaxBridge(avaxbridge / (10 ** 9));
  
    }
    catch (err) {
      console.log("Error getting tokens bridge")
    }
  }
  
  
 

    const TOTAL_SUPPLY= 100000000000000000
    
    const percentageFixed = (x: number) =>  {
        return (x * 0.06 / TOTAL_SUPPLY * 100).toFixed(2);
      }
  
  
    return (
        <>
        <dt>{percentageFixed(avaxBridge+avaBurned)}% is Burned</dt>
        <dt>{percentageFixed(TOTAL_SUPPLY-avaxBridge-avaBurned)}% is Redistributed to Hodlers</dt>
        </>
    

    );
  }
  
 
  export default ReflectionRates
  