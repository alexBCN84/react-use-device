# react-use-device

> A custom react hook to render content responsively based on device breakpoints. The contents also updates on screen resize.

[![NPM](https://img.shields.io/npm/v/react-use-device.svg)](https://www.npmjs.com/package/react-use-device) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-device
```

## Usage

> useDevice is a hook that returns an object with breakpoints for four devices.

```jsx
{
    isMOBILE: device === isMOBILE,   // app to winndw.innerWidth of 768px
    isTABLET: device === isTABLET,   // app to winndw.innerWidth of 992px
    isLAPTOP: device === isLAPTOP,   // app to winndw.innerWidth of 1170
    isDESKTOP: device === isDESKTOP  // from window.innerWidth of 1170 up
};
```

## Example

```jsx
import React from "react";

import { useDevice } from "react-use-device";

const MyComponent = () => {
  const { isMOBILE, isTABLET, isLAPTOP, isDESKTOP } = useDevice();

  return (
    <section>
      {isMOBILE && <h1>I am a mobile screen</h1>}
      {isTABLET && <h1>I am a tablet screen</h1>}
      {isLAPTOP && <h1>I am a laptop screen</h1>}
      {isDESKTOP && <h1>I am a desktop screen</h1>}
    </section>
  );
};

export default MyComponent;
```

## License

MIT © [alexBCN84](https://github.com/alexBCN84)
