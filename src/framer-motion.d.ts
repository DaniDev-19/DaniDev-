import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    initial?: any;
    animate?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    exit?: any;
  }
  interface SVGAttributes<T> {
    initial?: any;
    animate?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    exit?: any;
  }
}
