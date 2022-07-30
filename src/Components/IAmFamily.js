import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

export default function IAmFamily() {
    const [account, setAccount] = useState();
    const [contractInfo, setContractInfo] = useState(null);
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState(null);

    const wakeupHead = () => {
        let promiseToRobTheTime = new Promise( async (wakeup) => {
            wakeup();
        });

        promiseToRobTheTime.then(
            async () => {
                const acc =  await reach.getDefaultAccount();
                setAccount(acc);
                await getBalance(acc);
                const contract = await acc.contract(backend, JSON.parse(contractInfo));
                setContract(contract);
                await wakeup(contract)
                await getBalance(acc);
            }
            
        ).catch(e => { 
            console.log(e.message);
            
            // if(e.message.includes('Already')) setTimeUpMessage("You have already received the token");
            // else setTimeUpMessage("Time up or List is full")
        });
    }

    const wakeup = async (contract) => {
        await contract.apis.Family.keepHeadAwake();
    }

    const keepHeadAwake = () => {
        return true;
    }

    const timesUp = () => {
        console.log("Time is up");
    }

    const getBalance = async (account) => {
        const balAtomic = await reach.balanceOf(account);       
        const balance = reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
    }


    /* useEffect(() => {
        getBalance(account);
        
      }, []); */
      

  return (
    <Row>
        <h3>We are Family !!</h3>
        <h5>Balance : {balance}</h5>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contract Info</Form.Label>
                <Form.Control type="text" placeholder="Contract Info" value={contractInfo} onChange={(e) => setContractInfo(e.target.value)}/>
            </Form.Group>
        {contract === null ? <Button variant='warning' onClick={wakeupHead}> Check the Head </Button>: <Button variant='danger' onClick={ wakeup(contract) }>Buy the Time</Button>}
        </Form>
    </Row>
  );
}
