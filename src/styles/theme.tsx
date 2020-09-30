const opacityCheck = (opacity: number) => {
  return opacity && opacity >= 0 && opacity <= 1
}

export default {
  screens: {
    // max-widths in pixels
    xs: 450,
    sm: 640,
    md: 768,
    mmd: 890,
    lg: 1024,
    xl: 1280,
    xxl: 1350,
    xxxl: 1600,
  },
  fontSize: {
    heading: { lg: '2.2rem', md: '1.75rem' },
    subHeading: { lg: '1.5rem', md: '1.125rem' },
    paragraph: { lg: '1rem', md: '0.875rem' },
    subText: { lg: '1.25rem', md: '1.125rem' },
    button: '1.125rem',
    small: { lg: '0.875rem', md: '0.75rem' },
  },
  colors: {
   colors: {
     primary:{
   	  Main:'#0069FF',	
	    Light: '#93C2DB',
      Dark: '#072540',
    },
    secondary:{
      Main:'#FF8AE2',
      Light:'#FF8AE2',
      Dark:'#9C4668',
    },
    text:{
    	Primary: '#FFFFFF',
    	Secondary: '#93C2DB',
    	Disabled:'#5B6987',
    },
    tertiary:{
    	lightBlue:'#F6F9FC',
    	grey1:'#828282',
    	metalBlue:'#183D5D'
    },
    backgroud:{
    	Default:'#072540',
    	Paper:'#FFFFFF',
    },
    error:{
    	Main:'#CA2C2C',
    	Light:'#CA2C2C',
    	Dark:'#CA2C2C',
    },
    success:{
    	Main:'#109B67',
    	Light:'#109B67',
    	Dark:'#109B67',
    },

    grayText: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(102, 102, 102, ${opacity})`
        : `rgba(102, 102, 102, 1)`,
    red: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(202, 44, 44, ${opacity})`
        : `rgba(202, 44, 44, 1)`,
    purple: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(133, 140, 221, ${opacity})`
        : `rgba(133, 140, 221, 1)`,
    darkGreen: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(16, 155, 103, ${opacity})`
        : `rgba(16, 155, 103, 1)`,
    lightGreen: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(37, 193, 135, ${opacity})`
        : `rgba(37, 193, 135, 1)`,
    yellow: (opacity: number): string =>
      opacityCheck(opacity)
        ? `rgba(240, 183, 64, ${opacity})`
        : `rgba(240, 183, 64, 1)`,
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  zIndex: {
    content: '10',
    nav: '50',
  },
  gradient: {
    purple:
      'linear-gradient(135.47deg, #858CDD 1.77%, rgba(133, 140, 221, 0) 64.41%), #5B44BA;',
    green: 'linear-gradient(82.87deg, #109C68 25.92%, #25C087 78.64%);',
    lightGreenGradient:
      'linear-gradient(270deg, #25C187 0%, rgba(37, 193, 135, 0) 100%)',
    fadedLine: (deg: number) => `linear-gradient(
            ${deg}deg,
            rgba(235, 235, 235, 0) 0%,
            #ebebeb 10%,
            #ebebeb 85%,
            rgba(235, 235, 235, 0) 100%
          );`,
  },
}
