import React from 'react'

import { useDevice } from 'react-use-device'
import 'react-use-device/dist/index.css'

const App = () => {
  const { isMOBILE, isTABLET } = useDevice(); 

  const PersonalDetails = isMOBILE ?  <h1>I am mobile device</h1>
  : isTABLET ? <h2>I am tablet device</h2>
  : <h3>I am Desktop device</h3>;

  return PersonalDetails;
}

export default App
