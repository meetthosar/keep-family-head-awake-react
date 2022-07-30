import React from 'react'
import { useState, useEffect } from 'react';
import { Row, Button, Alert } from 'react-bootstrap';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default function IAmHead() {
    const [contractInfo, setContractInfo] = useState(null);
    const [thieves, setThieves] = useState({'thief1' : null, 'thief2' : null});
    const [balance, setBalance] = useState(null);
    const [account, setAccount] = useState(null)

    const payTokens = async () => {
        const account = await reach.getDefaultAccount();
        setAccount(account);
        await getBalance(account);

        const contract = await account.contract(backend);

        backend.HeadOfFamily(contract, Object({
            initialStakes: reach.parseCurrency(5), boughtTime : 8,
            wakeUpFee : reach.parseCurrency(2),
            sendThief : (thief) => {
                console.log(thief);
                var thievesObject = thieves;
                if(thieves.thief1 === null) 
                    thievesObject.thief1 = thief;
                else
                    thievesObject.thief2 = thief;
                
                setThieves(thievesObject);
            },
            getThieves : () => {
                return thieves;
            }
        }))
        
        const contractInfo = JSON.stringify( await contract.getInfo(), null, 2);
        setContractInfo(contractInfo);
        getBalance(account);
    }

    const getBalance = async (account) => {
        const balAtomic = await reach.balanceOf(account);       
        const balance = reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
    }
/* 
    useEffect(() => {
      getBalance(account);
      
    }, []);
     */

  return (
    <Row>
        <h3>I am Head!</h3>
        <h4>Contract Info : {contractInfo !== null ? contractInfo : ""}</h4>
        <h5>Balance : {balance}</h5>
        {contractInfo === null ? <Button variant='warning' onClick={payTokens}> Launch 5000 Tokens </Button>: <Alert variant='info'>Paid the Contract ! And I am awake</Alert>}
    </Row>
  )
}
