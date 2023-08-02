// import { useState, useEffect } from "react";
// import Web3 from "web3";
// const networks = {
//   polygon: {
//     chainId: `0x${Number(137).toString(16)}`,
//     chainName: "Polygon Mainnet",
//     nativeCurrency: {
//       name: "MATIC",
//       symbol: "MATIC",
//       decimals: 18
//     },
//     rpcUrls: ["https://polygon-rpc.com/"],
//     blockExplorerUrls: ["https://polygonscan.com/"]
//   },
//   Arbitrum: {
//         chainId: `0x${Number(42161).toString(16)}`,
//         chainName: "Arbitrum One",
//         nativeCurrency: {
//           name: "Arbitrum One",
//           symbol: "ETH",
//           decimals: 18
//         },
//         rpcUrls: ["https://arbitrum-mainnet.infura.io"],
//         blockExplorerUrls: ["https://explorer.arbitrum.io"]
//       },
// bsc: {
//     chainId: `0x${Number(56).toString(16)}`,
//     chainName: "Binance Smart Chain Mainnet",
//     nativeCurrency: {
//       name: "Binance Chain Native Token",
//       symbol: "BNB",
//       decimals: 18
//     },
//     rpcUrls: [
//       "https://bsc-dataseed1.binance.org",
//       "https://bsc-dataseed2.binance.org",
//       "https://bsc-dataseed3.binance.org",
//       "https://bsc-dataseed4.binance.org",
//       "https://bsc-dataseed1.defibit.io",
//       "https://bsc-dataseed2.defibit.io",
//       "https://bsc-dataseed3.defibit.io",
//       "https://bsc-dataseed4.defibit.io",
//       "https://bsc-dataseed1.ninicoin.io",
//       "https://bsc-dataseed2.ninicoin.io",
//       "https://bsc-dataseed3.ninicoin.io",
//       "https://bsc-dataseed4.ninicoin.io",
//       "wss://bsc-ws-node.nariox.org"
//     ],
//     blockExplorerUrls: ["https://bscscan.com"]
//   }
// };

// const changeNetwork = async ({ networkName, setError }) => {
//   try {
//     if (!window.ethereum) throw new Error("No crypto wallet found");
//     await window.ethereum.request({
//       method: "wallet_addEthereumChain",
//       params: [
//         {
//           ...networks[networkName]
//         }
//       ]
//     });
//   } catch (err) {
//     setError(err.message);
//   }
// };

// export default function Cuser() {
//   const [error, setError] = useState();
//   const [network,setNetwork]=useState([]);
//   const getchannelapi=()=>{
//      fetch("https://chainid.network/chains.json")
//      .then(res=>{
//        return res.json();
//      })
//      .then(data=>{
//        setNetwork(data)
//        console.log(data,"=====>")
//      })

//   }
//   useEffect(()=>{
//     getchannelapi();
//   },[])
//   const handleNetworkSwitch = async (networkName) => {
//     setError();
//     await changeNetwork({ networkName, setError });
//   };

//   const networkChanged = (chainId) => {
//     console.log({ chainId });
//   };
//   const switchNetwork = async (chainID) => {
//     const res= await window.ethereum.request({
//        method:'wallet_switchEthereumChain',
//        params: [{chainId: Web3.utils.toHex(chainID)}]
//      });
//      console.log("response",res)
//      // refresh
//      // window.location.reload();
//    };

// const onClick=(item)=>{
//   console.log("===>cv",item)
//   switchNetwork(item.chainID)
// }
//   useEffect(() => {
//     window.ethereum.on("chainChanged", networkChanged);

//     return () => {
//       window.ethereum.removeListener("chainChanged", networkChanged);
//     };
//   }, []);

//   return (
//     <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
//       <main className="mt-4 p-4">
//         <div>
//         {
          
//           network.slice(110,130)?.map((item,index)=>{
//          return(
//               <div key={index} >
              
//                <button onClick={onClick(item)}>{item?.name}</button>
//               </div>
//             //  
//             )
//           })
//         }
//         </div>
      
//         <h1 className="text-xl font-semibold text-gray-700 text-center">
//           Force MetaMask network
//         </h1>
//         <div className="mt-4">
//           <button
//             onClick={() => handleNetworkSwitch("polygon")}
//             className="mt-2 mb-2 btn btn-primary submit-button focus:ring focus:outline-none w-full"
//           >
//             Switch to Polygon
//           </button>
//           <button
//            onClick={() => handleNetworkSwitch("Arbitrum")}>
//            Switch to Arbitrum
//           </button>
//           <button
//             onClick={() => handleNetworkSwitch("bsc")}
//             className="mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full"
//           >
//             Switch to BSC
//           </button>
//           {/* <ErrorMessage message={error} /> */}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react'
import Web3 from 'web3';

function Cuser() {
  const[network,setNetwork]=useState([])
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const[accountAddress,setAccountAddress]=useState()
  const[id,setId]=useState()
  
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
 
  const onConnect=async()=>{                     ////fetching blance so that might be taking some time so it is async fun
        try {
            const currentProvider = detectCurrentProvider();
            if(currentProvider){
               await currentProvider.request({method: 'eth_requestAccounts'});  //it will fetch all the etherium account
               const web3 = new Web3(currentProvider);
               const userAccount  =await web3.eth.getAccounts();
               const account = userAccount[0]; //account which i select will come here
               setAccountAddress(account)
               console.log("account",account)
               let ethBalance = await web3.eth.getBalance(account);
               setEthBalance(ethBalance);
               setIsConnected(true);
            }

        } catch (error) {
            console.log(error)
            
        }                        
  }
  const onDisconnect = () => {
    setIsConnected(false);
  }
  

const changeNetwork = async ({ networkName}) => {
  try {
    
   const res= await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...network[networkName]
        }
      ]
    });
    console.log("res,,,,network",res)
  } catch (err) {
    console.log("errr,,,",err)
  
  }
};
const handleNetworkSwitch = async (networkName) => {

  await changeNetwork({ networkName});
};
 

const getData=()=>{
  fetch("https://chainid.network/chains.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
     setNetwork(data)
  });
}

const switchNetwork = async (chainID) => {
 
 const res= await window.ethereum.request({
    method:'wallet_switchEthereumChain',
    params: [{chainId: Web3.utils.toHex(chainID)}]
  });
  console.log("response",res)
  
};
const getNetwork=(cv)=>{
  console.log("cv.....",cv.chainId)
  switchNetwork(cv.chainId)

}



  return (
    <div className="app">
    <div className="app-header">
      <h1>React dApp authentication with React, We3.js and Metamask</h1>
      {
        network.slice(110,130).map((cv,indx)=>{
         return <div key={indx}>
            <span>{indx}</span>
             <button onClick={()=>{getNetwork(cv)}}>{cv.name}</button>

         </div>
                 
        })
      }
    </div>
    <div className="app-wrapper">
      {
        !isConnected &&(
            <div>
            <button className="app-button__login" onClick={onConnect}>
            Login
            </button>
          </div>
        )
      }
    </div>
    {isConnected && (
        <div className="app-wrapper">
          <div className="app-details">
            <h2> You are connected to metamask.</h2>
            <div className="app-balance">
              <span>Balance: </span>
              {ethBalance}
            </div>
            <div className="app-balance">
              <span>Account Address: </span>
              {accountAddress}
            </div>
            <button
            onClick={() => handleNetworkSwitch("polygon")}
            className="mt-2 mb-2 btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Switch to Polygon
          </button>
          <button
            onClick={() => handleNetworkSwitch("bsc")}
            className="mt-2 mb-2 bg-warning border-warning btn submit-button focus:ring focus:outline-none w-full"
          >
            Switch to BSC
          </button>
          </div>
          <div>
           <button onClick={getData}>getData</button>
            <button className="app-buttons__logout" onClick={onDisconnect}>
            Disconnect
            </button>
          </div>
        </div>
      )}
   
  </div>
  )
}

export default Cuser;