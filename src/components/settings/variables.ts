const variables = {
  webPadding: {
    sectionPadding: '3em 1em',
    debugMargin: (): string => (process.env.NODE_ENV === 'development' ? '40px' : '0'),
  },
  colors: {
    blue: 'rgb(0, 18, 36)',
    blueWhite: '#893808',
    yellow: 'rgb(214, 187, 83)',
    white: '#FFF',
    gray: '#545454',
    blueSecondary: '#0c253e',
  },
  font: {
    size: '12pt',
    links: 'Montserrat SemiBold',
    title: 'Montserrat Bold',
    normal: 'Montserrat',
    menu: 'Montserrat Medium',
    secondary: 'Source Sans Pro',
  },
  navbar: {
    height: '86px',
  },
};

export default variables;
