import React, { useState } from "react";
import { ethers } from "ethers";
const Metamask=()=>{
    const [data,setData]=useState(null);
    const [accountBalance,setAccountBalance]=useState(null);
    const [userBalance,setUserBalance]=useState(null);
    const connectWallect=()=>{
        if(window.ethereum){
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result=>{
               accountChanged([result[0]])
               
             })
        }else{
            setData("install meta mask....!!")
        }
    }
    const accountChanged=(accountName)=>{
        setAccountBalance(accountName)
        getUserBalance(accountName)
    }
    const getUserBalance=(accountAddress)=>{
        window.ethereum.request({method:'eth_getBalance',  params:[String(accountAddress),'latest'] })
        .then(balance=>{
            setUserBalance(balance)
        })
    }
    return(
        <div>
        <h1>Meta mask Connection wallet</h1>
        <button onClick={connectWallect}>connect Wallet Button</button>
        <h3>Addresss:=={accountBalance}</h3>
        <h3>Balance:=={userBalance}</h3>
        
        
        {/* {data} */}
       </div>
    )
 
}
export default Metamask;
