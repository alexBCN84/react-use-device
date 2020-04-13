# react-use-device

> A custom react hook to render content responsively based on device breakpoints. The contents also updates on screen resize. It works well also on SSR applications like does built with NextJS.

[![NPM](https://img.shields.io/npm/v/react-use-device.svg)](https://www.npmjs.com/package/react-use-device) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-device
```

## Usage with default breakpoint values

> useDevice is a hook that returns an object with breakpoints for four devices.

```jsx
{
    isMOBILE: device === isMOBILE,   // up to winndow.innerWidth of 768px
    isTABLET: device === isTABLET,   // up to winndow.innerWidth of 992px
    isLAPTOP: device === isLAPTOP,   // up to winndow.innerWidth of 1170
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

## Usage with your own breakpoint values

> useDevice accepts a breakpoints object as input, so you can adapat the breakpoints to your project needs. It is important to notice here that you can pass whatever values you wish, but the propety names must be as follows:

```jsx
const breakpoints = {
  tablet: 650, // useDevice will return isMobile for wiewports < 650 and isTablet for viewports > 650
  laptop: 980, // useDevice will return isTablet for wiewports < 980 and isLaptop for viewports > 980
  desktop: 1200 // useDevice will return isLaptop for wiewports < 1200 and isDesktop for viewports > 1200
};
```

## Example

```jsx
import React from "react";

import { useDevice } from "react-use-device";

const MyComponent = () => {
  const breakpoints = {
    tablet: 650,
    laptop: 980,
    desktop: 1200
  };

  const { isMOBILE, isTABLET, isLAPTOP, isDESKTOP } = useDevice(breakpoints);

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
