import { useState } from "react";
import Web3 from "web3";
const Metamaskweb = () => {
    const [connected,setConnected]=useState(false);
    const [ethBalance, setEthBalance] = useState("");
    const [accountBalance,setAccountBalance]=useState(null);
    const deteuctCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.Web3) {
            provider = window.Web3.currentProvider
        } else {
          console.log("Non-ethereum browser detected. You should install Metamask")
        }
        return provider;
    }
    const onConnect=async()=>{
     try {
         const currentProvider=deteuctCurrentProvider();
         if(currentProvider){
            await currentProvider.request({method: 'eth_requestAccounts'});
            const web3 = new Web3(currentProvider);
            const userAccount  =await web3.eth.getAccounts();
            const account = userAccount[0];
             console.log(account)
            let ethBalance = await web3.eth.getBalance(account);
            setEthBalance(ethBalance);
            setAccountBalance(account)
            setConnected(true);
           }
     } catch (error) {
         console.log(error)
     }
    }
    const onDisconnect = () => {
        setConnected(false);
      }
    return (
        <div className="app">
            <div className="app-header">
                <h1>React dApp authentication with React, We3.js and Metamask</h1>
            </div>
            <div className="app-wrapper">
                {
                    !connected && (
                        <div>
                        <button onClick={onConnect}>Login</button>
                       
                    </div>
                    
               )}
              
            </div>
            {connected && (
          <div className="app-wrapper">
           <div className="app-details">
           <h2> You are connected to metamask.</h2>
              
           <span>Addresss: {accountBalance} </span>
            <div className="app-balance">
      
              <span>Balance: </span>{ethBalance}
            </div>
          </div>
          <div>
            <button className="app-buttons__logout" onClick={onDisconnect}>
             Disconnect
            </button>
          </div>
        </div>
      )}
        </div>
    )

}
export default Metamaskweb;