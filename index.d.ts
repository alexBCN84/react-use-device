declare module "react-use-device" {
  /**
   * Returns the device object
   *
   * @param breakpoints
   */
  export function useDevice(breakpoints?: Breakpoints): Device;
}

interface Breakpoints {
  /**
   * useDevice will return isMobile for view ports < {tablet} and isTablet for view ports >  {tablet}
   * @default 768
   */
  tablet: number;
  /**
   * useDevice will return isTablet for view ports < {laptop} and isLaptop for view ports > {laptop}
   * @default 992
   */
  laptop: number;
  //
  /**
   * useDevice will return isLaptop for view ports < {desktop} and isDesktop for view ports > {desktop}
   * @default 1170
   */
  desktop: number;
}

interface Device {
  isMOBILE: boolean;
  isTABLET: boolean;
  isLAPTOP: boolean;
  isDESKTOP: boolean;
}
