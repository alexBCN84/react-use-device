import React from 'react'

import { useDevice } from 'react-use-device'
import 'react-use-device/dist/index.css'

const App = () => {
  const { isMOBILE, isTABLET, isLAPTOP, isDESKTOP } = useDevice(); 

  return (
    <section>
      {isMOBILE && <h1>I am a mobile screen</h1>}
      {isTABLET && <h1>I am a tablet screen</h1>}
      {isLAPTOP && <h1>I am a laptop screen</h1>}
      {isDESKTOP && <h1>I am a desktop screen</h1>}
    </section>
    );
}

export default App
