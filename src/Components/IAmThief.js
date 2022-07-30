import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));


export default function IAmThief() {
    const [account, setAccount] = useState();
    const [contractInfo, setContractInfo] = useState(null);
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState(null);

    const checkTheHead = async () => {
        let promiseToRobTheTime = new Promise( async (startRobbing) => {
            
            startRobbing();
           
        });

        promiseToRobTheTime.then(
            async () => {console.log("In Promise");
                const acc =  await reach.getDefaultAccount(reach.parseCurrency(1000));
                setAccount(acc);
                await getBalance(acc);
                const contrac = await acc.contract(backend, JSON.parse(contractInfo));
                setContract(contrac);
                // await getBalance(acc);
                rob(contrac);
            }
            // () => { console.log('Error'); }
        ).catch(e => { 
            console.log(e.message);
            
            // if(e.message.includes('Already')) setTimeUpMessage("You have already received the token");
            // else setTimeUpMessage("Time up or List is full")
        });
    }

    const getBalance = async (account) => {
        const balAtomic = await reach.balanceOf(account);       
        const balance = reach.formatCurrency(balAtomic, 4);
        setBalance(balance);
    }

    const rob = async (contract) => {
            await contract.apis.Thieves.robTheTime();
    }

    const robTheTime = () => {
        return true;
    }
      

  return (
    <Row>
        <h3>I am a Thief !!</h3>
        <h5>Balance : {balance}</h5>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contract Info</Form.Label>
                <Form.Control type="text" placeholder="Contract Info" value={contractInfo} onChange={(e) => setContractInfo(e.target.value)}/>
            </Form.Group>
        {contract === null ? <Button variant='warning' onClick={checkTheHead}> Check the Head </Button>: <Button variant='danger' onClick={checkTheHead}>Rob the Time</Button>}
        </Form>
    </Row>
  )
}
