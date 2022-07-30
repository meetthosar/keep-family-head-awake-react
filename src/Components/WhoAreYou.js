import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import IAmFamily from './IAmFamily';
import IAmHead from './IAmHead';
import IAmThief from './IAmThief';
import SelectIdentity from './SelectIdentity';

export default function WhoAreYou() {

  const [whoAmI, setWhoAmI] = useState(null);  

  return (
    <Container className='p-3'>
        <h3>Who Are You?</h3>
        {whoAmI === null ? <SelectIdentity 
        iAmHead={() => setWhoAmI('head')} 
        iAmFamily={() => setWhoAmI('family')} 
        iAmThief={() => setWhoAmI('thief') }/> : ""}
        {whoAmI === 'head' ? <div><IAmHead/></div> : ""}
        {whoAmI === 'family' ? <div><IAmFamily/></div> : ""}
        {whoAmI === 'thief' ? <div><IAmThief/></div> : ""}
    </Container>
  )
}
