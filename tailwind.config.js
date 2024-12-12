/* tailwind.config.js */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1.25': '0.3125rem',
        '1.875': '0.46875rem',
        '2.5': '0.625rem',
        '3.75': '0.9375rem',
        '15': '3.75rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '32': '8rem',
        '34': '8.5rem',
        '40': '10rem',
        '45': '11.25rem',
        '48': '12rem',
        '50': '12.5rem',
        '60': '15rem',
        '65': '16.25rem',
        '67': '16.75rem',
        '80': '20rem',
        '90': '22.5rem',
        '100': '25rem',
        '110': '27.5rem',
        '120': '30rem',
        '130': '32.5rem',
        '150': '37.5rem',
        '160': '40rem',
        '190': '47.5rem',
        '200': '50rem',
        '220': '55rem',
        '225': '56.25rem',
        '250': '62.5rem',
        '275': '68.75rem',
        '300': '75rem',
        '310': '77.5rem',
        '320': '80rem',
        '350': '87.5rem',
        '380': '95rem',
        '400': '100rem',
        '420': '105rem',
        '450': '112.5rem',
      },
      colors: {
          'zerodha-grey': '#666',
          'zerodha-light-grey': '#9b9b9b',
          'zerodha-blue': '#387ed1',
          'zerodha-bg-grey': '#fafafb',
          'zerodha-red': '#f12d2d',
          'zerodha-green':'#10b983',
          'zerodha-positive-green':'#167f39',
          'zerodha-negative-red':'#df514c'
          },
       fontSize: {
        'tiny': '.75rem',
        'small': '.875rem',
        'med': '1rem',
        'large': '1.15rem',
        'larger':'1.25rem',
         '1.5':'1.5rem',
          '1.75':'1.75rem',
         '2.0':'2rem',
        '2.75':'2.75rem'
       },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
         },
       lineHeight: {
        '4.5':'1.125',
         '1.2':'1.2',
          '1.25':'1.25',
         '1.5':'1.5',
          '1.6':'1.6',
         '1.7':'1.7',
           '1.8':'1.8',
        
      },
      minWidth: {
        '350':'350px',
       
      },
       maxWidth: {
       '100':'100%',
         '500':'500px',
        '1000':'1000px',
        '1100':'1100px',
        '1300':'1300px'
       },
        boxShadow: {
        'navbar': '2px 1px 2px #eee',
        'menu':'0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
         'modal':'2px 2px 2px #eaeaea'

        },
         transitionProperty:{
           'all':'all',
          'color':'color',
          'opacity':'opacity',
           'transform':'transform'
         },
        transitionDuration:{
          '300':'.3s',
          '250':'.25s',
          '200':'.2s',
         '150':'.15s',
         '100':'.1s'
        },
         transitionTimingFunction:{
           'ease':'ease',
            'ease-in-out':'ease-in-out',

         },
        transitionDelay:{
          '0':'0s'
        },
        cursor:{
          'pointer':'pointer'
        },
    },
  },
   variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [
     function ({ addComponents, theme }) {
      addComponents({
         '.container': {
          position: 'relative',
          width: theme('maxWidth.1100'),
           maxWidth: '100%',
          margin: '0 auto',
          boxSizing: 'border-box',
        },
       '.row': {
          boxSizing: 'border-box',
          display: 'flex',
           flex: '0 1 auto',
          flexFlow: 'row wrap',
        },
         '.columns, .column': {
boxSizing: 'border-box',
flex: '0 1 auto',
},
'.column:first-child, .columns:first-child':{
marginLeft: 0,
},
'.one': {
flexBasis: '4.6666666667%',
width: '4.6666666667%',
},
'.two': {
flexBasis: '13.3333333333%',
width: '13.3333333333%',
},
'.three': {
flexBasis: '22%',
width: '22%',
},
'.four': {
flexBasis: '30.6666666667%',
width: '30.6666666667%',
},
'.five': {
flexBasis: '39.3333333333%',
width: '39.3333333333%',
},
'.six': {
flexBasis: '48%',
width: '48%',
},
'.seven': {
flexBasis: '56.6666666667%',
width: '56.6666666667%',
},
'.eight': {
flexBasis: '65.3333333333%',
width: '65.3333333333%',
},
'.nine': {
flexBasis: '74%',
width: '74%',
},
'.ten': {
flexBasis: '82.6666666667%',
width: '82.6666666667%',
},
'.eleven': {
flexBasis: '91.3333333333%',
width: '91.3333333333%',
},
'.twelve': {
flexBasis: '100%',
width: '100%',
marginLeft: 0,
},
'.column-offset-0': {
marginLeft: 0,
},
'.column-offset-1': {
marginLeft: '8.33333333%',
},
'.column-offset-2': {
marginLeft: '16.66666667%',
},
'.column-offset-3': {
marginLeft: '25%',
},
'.column-offset-4': {
marginLeft: '33.33333333%',
},
'.column-offset-5': {
marginLeft: '41.66666667%',
},
'.column-offset-6': {
marginLeft: '50%',
},
'.column-offset-7': {
marginLeft: '58.33333333%',
},
'.column-offset-8': {
marginLeft: '66.66666667%',
},
'.column-offset-9': {
marginLeft: '75%',
},
'.column-offset-10': {
marginLeft: '83.33333333%',
},
'.column-offset-11': {
marginLeft: '91.66666667%',
},
'.between': {
justifyContent: 'space-between',
},
'.evenly': {
justifyContent: 'space-evenly',
},
'.around': {
justifyContent: 'space-around',
},
'.center': {
justifyContent: 'center',
textAlign: 'center',
},
'.start': {
justifyContent: 'flex-start',
},
'.end': {
justifyContent: 'flex-end',
},
'.top': {
alignItems: 'flex-start',
},
'.bottom': {
alignItems: 'flex-end',
},
'.middle': {
alignItems: 'center',
},
'.first': {
order: -1,
},
'.last': {
order: 1,
},
'.vertical': {
flexFlow: 'column wrap',
},
'.row-align-center': {
alignItems: 'center',
},
'.space-right': {
marginRight: '10px',
},
'.space-left': {
marginLeft: '10px',
},
'.space-bottom': {
marginBottom: '10px',
},
'.space-top': {
marginTop: '10px',
},
'.icon-ok-circled::before': {
content: '""',
},
'.icon-eye::before': {
content: '""',
},
'.icon-eye-off::before': {
content: '""',
},
'.icon-th::before': {
content: '""',
},
'.icon-arrow-right::before': {
content: '""',
},
'.icon-phone::before': {
content: '""',
},
'.icon-trash-empty::before': {
content: '""',
},
'.icon-info-circled-alt::before': {
content: '""',
},
'.icon-twitter::before': {
content: '""',
},
'.icon-menu::before': {
content: '""',
},
'.icon-linkedin::before': {
content: '""',
},
'.icon-angle-up::before': {
content: '""',
},
'.icon-angle-down::before': {
content: '""',
},
'.icon-instagram::before': {
content: '""',
},
'.icon-facebook-official::before': {
content: '""',
},
'.icon-telegram::before': {
content: '""',
},
'.button, button, input[type=submit], input[type=reset], input[type=button]': {
display: 'inline-block',
padding: '10px 30px',
color: '#555',
textAlign: 'center',
fontSize: '1.2em',
lineHeight: '1.2em',
fontWeight: '500',
textDecoration: 'none',
whiteSpace: 'nowrap',
backgroundColor: 'rgba(0, 0, 0, 0)',
borderRadius: '3px',
border: '1px solid #bbb',
cursor: 'pointer',
boxSizing: 'border-box',
},
'footer': {
backgroundColor: '#fbfbfb',
padding: '30px 0 5px 0',
borderTop: '1px solid #eee',
},
'footer ul': {
listStyleType: 'none',
margin: 0,
padding: 0,
},
'footer .contactnumber': {
fontSize: '1.25rem',
color: '#424242',
marginBottom: '10px',
},
'footer .social': {
padding: 0,
marginTop: '15px',
},
'footer .social:last-child': {
marginTop: '8px',
},
'footer .social li': {
display: 'inline-block',
marginRight: '13px',
},
'footer .social a': {
fontSize: '1.25rem',
color: '#9b9b9b',
lineHeight: 1,
},
'footer .social a:hover': {
color: '#387ed1',
},
'footer .social a img': {
height: '18px',
width: '18px',
position: 'relative',
top: '3px',
},
'footer .social a img.youtube-logo': {
width: '26px',
height: '26px',
top: '7px',
},
'footer .footer-logo': {
padding: '10px 0',
},
'footer .footer-logo img': {
maxHeight: '20px',
width: 'auto',
},
'footer .main-footer li': {
lineHeight: 2,
},
'footer .main-footer li a': {
color: '#666',
},
'footer .main-footer li a:hover': {
color: '#387ed1',
},
'footer .main-footer .nav-head': {
fontSize: '1.125rem',
fontWeight: '500',
marginBottom: '10px',
},
'footer .smallprint': {
color: '#9b9b9b',
marginTop: '40px',
},
'footer .smallprint p': {
fontSize: '.65rem',
marginTop: 0,
marginBottom: '10px',
width: '100%',
},
'footer .smallprint p:last-child': {
marginBottom: 0,
},
'footer .footer-graveyard-links ul li': {
display: 'inline',
fontSize: '.8rem',
marginRight: '20px',
},
'footer .footer-graveyard-links ul li a': {
color: '#9b9b9b',
lineHeight: 4,
fontSize: '.75rem',
},
'footer .footer-graveyard-links ul li a:hover': {
color: '#387ed1',
},
'footer .copyright': {
margin: 0,
fontSize: '.8rem',
},
'.navbar': {
perspective: '600px',
top: 0,
width: '100%',
zIndex: 10,
position: 'fixed',
backgroundColor: '#fff',
boxShadow: '2px 1px 2px #eee',
boxSizing: 'border-box',
},
'.navbar a': {
fontWeight: '400',
},
'.navbar .container': {
padding: 0,
},
'.navbar .logo-img': {
maxHeight: '17px',
verticalAlign: 'middle',
position: 'relative',
top: '18px',
},
'.navbar #nav_acop': {
padding: '3px 20px',
background: '#387ed1',
borderRadius: '3px',
color: '#fff',
fontWeight: '500',
},
'.navbar #nav_acop:hover': {
background: '#222',
},
'.navbar #nav-icon3': {
width: '18px',
top: '8px',
position: 'relative',
margin: '0 auto',
transform: 'rotate(0deg)',
transition: '0.5s ease-in-out',
cursor: 'pointer',
},
'.navbar #nav-icon3 span': {
display: 'block',
position: 'absolute',
height: '2px',
width: '100%',
background: '#424242',
borderRadius: '9px',
opacity: 1,
left: 0,
transform: 'rotate(0deg)',
transition: '0.25s ease-in-out',
},
'.navbar #nav-icon3 span:nth-child(1)': {
top: '0px',
},
'.navbar #nav-icon3 span:nth-child(2), .navbar #nav-icon3 span:nth-child(3)': {
top: '6px',
},
'.navbar #nav-icon3 span:nth-child(4)': {
top: '12px',
},
'.navbar #menu_btn': {
color: '#666',
fontWeight: '400',
display: 'inline-block',
padding: '20px 0',
},
'.navbar #menu_btn:hover': {
cursor: 'pointer',
},
'.navbar-links': {
listStyleType: 'none',
textAlign: 'right',
margin: 0,
padding: 0,
},
'.navbar-links #navbar_menu': {
paddingTop: '20px',
paddingBottom: '20px',
paddingLeft: '15px',
},
'.navbar-links li': {
display: 'inline',
},
'.navbar-links li a': {
color: '#666',
fontSize: '.9rem',
transition: 'color 0.3s',
display: 'inline-block',
padding: '20px',
boxSizing: 'border-box',
},
'.navbar-links li a:hover': {
color: '#387ed1',
},
'.navbar-links li a:hover img': {
opacity: '.8',
},
'.nav-up': {
top: '-110px !important',
},
'.nav-active ul li a.active': {
color: '#387ed1',
textShadow: '0 0 0 #387ed1',
},
'.navbar-menu': {
width: '700px',
position: 'absolute',
opacity: 0,
transition: 'all .15s ease',
transform: 'rotateX(-15deg)',
transformOrigin: '0 0',
right: '0px',
top: '67px',
zIndex: 100,
backgroundColor: '#fff',
borderRadius: '1px',
boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, .1)',
visibility: 'hidden',
},
'.navbar-menu a': {
display: 'block',
},
'.navbar-menu .products-list': {
padding: '20px 0',
},
'.navbar-menu .products-list a': {
display: 'block',
padding: 0,
},
'.navbar-menu .products-list img': {
maxHeight: '50px',
},
'.navbar-menu .menu-footer': {
padding: '20px 30px',
backgroundColor: '#fafafb',
},
'.navbar-menu .menu-footer a': {
display: 'block',
padding: 0,
marginBottom: '5px',
},
'.navbar-menu .menu-footer a img': {
maxHeight: '35px',
marginBottom: '10px',
},
'.navbar-menu .menu-footer li': {
fontSize: '1rem',
padding: '5px 20px',
},
'.navbar-menu .menu-footer .education a': {
marginRight: '40px',
display: 'inline-block',
},
'.navbar-menu ul': {
padding: 0,
margin: 0,
},
'.navbar-menu ul li': {
padding: '10px 20px',
display: 'block',
marginLeft: 0,
},
'.navbar-menu ul li a': {
fontSize: '1rem !important',
},
'.navbar-menu ul li span': {
color: '#424242',
},
'.navbar-menu ul li img': {
transition: '.3s',
width: '40px',
maxHeight: '50px',
marginRight: '20px',
},
'.navbar-menu ul li:hover img': {
opacity: '.6',
},
'.navbar-menu.show': {
visibility: 'visible',
opacity: 1,
transform: 'rotateX(0deg)',
display: 'block',
},
'html,body':{
fontFamily: theme('fontFamily.inter'),
fontSize: '16px',
width: '100%',
lineHeight: '1.7',
fontWeight: '400',
webkitFontSmoothing: 'antialiased',
},
'a':{
color: theme('colors.zerodha-blue'),
textDecoration:'none',
fontWeight: '500',
},
'a:hover':{
cursor:'pointer',
color:'#444'
},
'h1,h2,h3,h4,h5,h6':{
marginTop: '0px',
fontWeight: '500',
marginBottom: '20px',
},
'h1':{
fontSize: '2.75rem',
lineHeight: '1.25',
},
'h2':{
fontSize: '2rem',
lineHeight: '1.5',
},
'h3':{
fontSize: '1.75rem',
lineHeight: '1.6',
},
'h4':{
fontSize: '1.5rem',
},
'h5':{
fontSize: '1.25rem',
fontWeight: '400',
},
'h5 a':{
fontWeight: '400',
},
'h6':{
fontSize: '1.125rem',
},
'p':{
fontSize: '1rem',
lineHeight: '1.8',
marginBottom: '15px',
},
'.hidden':{
display: 'none !important',
},
'.v-align':{
alignItems: 'center',
display: 'flex',
},
'.no-bullet-list':{
listStyleType: 'none',
},
'.space-top':{
marginTop: '30px',
},
'.space-bottom':{
marginBottom: '30px',
},
'.bottom-5':{
marginBottom: '5px',
},
'.text-18':{
fontSize: '1.15rem',
},
'.text-12':{
fontSize: '.75rem',
},
'.text-14':{
fontSize: '.875rem',
},
'.text-center':{
textAlign: 'center',
},
'.text-left':{
justifyContent: 'flex-start',
textAlign: 'left',
},
'.text-right':{
justifyContent: 'flex-end',
textAlign: 'right',
},
'.text-grey':{
color: '#666',
},
'.text-light-grey':{
color: '#9b9b9b',
},
'.border-bottom':{
borderBottom: '1px solid #eee',
},
'.border-top':{
borderTop: '1px solid #eee',
},
'.color-grey':{
color: '#9b9b9b',
},
'.color-blue':{
color: '#387ed1',
},
'.grey-back':{
backgroundColor: '#fafafb',
},
'.show-on-mobile': {
display: 'none',
},
'body':{
paddingTop: '65px',
color: '#424242',
minWidth: '350px',
},
'body.no-scroll':{
overflow: 'hidden'
},
'.mini-container':{
width: '900px',
margin: 'auto',
maxWidth: '100%',
boxSizing: 'border-box',
},
'section':{
padding: '80px 0 0 0',
},
'section:first-child':{
paddingTop: '100px',
paddingBottom: '100px',
},
'section:first-child h1, section:first-child h2':{
marginBottom: 0,
},
'section:first-child h5':{
marginTop: '10px',
},
'section:last-child':{
paddingBottom: '80px',
},
'section.bug-sections':{
paddingTop: '35px',
},
'img':{
maxWidth:'100%',
},
'hr':{
border: 'none',
borderTop: '1px solid #eee',
},
'button, .button': {
backgroundColor: theme('colors.zerodha-blue'),
color: '#fff',
border: '1px solid rgba(0, 0, 0, 0) !important',
borderRadius: '3px',
},    'button:hover, .button:hover':{
  border: '1px solid rgba(0, 0, 0, 0)',
  background: '#222',
  color: '#fff !important',
},
'b, strong':{
fontWeight: '500',
},
'.landing-subheading': {
  fontSize: '1.25rem',
 fontWeight: '400',
  marginTop: '10px',
},
'.homepage section': {
  padding: '0 20px 120px 20px',
},
'.homepage section.ecosystem': {
  marginTop: '30px',
},
'.homepage section.ecosystem h2': {
  marginBottom: '40px',
},
'.homepage section.ecosystem .why-us-section h3': {
  marginBottom: 0,
  fontSize: '1.25rem',
},
'.homepage section.ecosystem .why-us-section p': {
 marginTop: '5px',
  marginBottom: '32px',
color: '#666',
},
'.homepage section.ecosystem .why-us-section:last-child p': {
  marginBottom: 0,
},
'.homepage section .demo-link': {
   marginLeft: '24px',
},
'.homepage section:last-child': {
 paddingBottom: '100px',
},
'.homepage section.landing': {
  marginTop: '10vh',
},
'.homepage section.landing .button': {
 marginTop: '25px',
},
'.homepage section .landing-image': {
  marginBottom: '60px',
  maxHeight: '45vh',
},
'.homepage section .press-strip': {
marginTop: '60px',
},
'.homepage section .press-strip img:hover': {
  opacity: '.8',
},
'.homepage section .ecosystem-image': {
  maxWidth: '100%',
 width: 'auto',
},
'.homepage .pricing .pricing-link': {
 marginTop: 0,
  paddingLeft: '10px',
},
'.homepage .pricing .pricing-box': {
display: 'inline-block',
},
'.homepage .pricing .pricing-box img': {
width: '120px',
position: 'relative',
top: '22px',
},
'.homepage .pricing .pricing-box p': {
fontSize: '10px',
margin: 0,
color: '#666',
  lineHeight: '16px',
},
'.homepage .pricing .pricing-box p, .homepage .pricing .pricing-box img': {
display: 'inline-block',
},
'.homepage .pricing .pricing-box:last-child img': {
  top: '27px',
},
'.homepage .pricing .pricing-box:last-child p': {
 position: 'relative',
  left: '-6px',
},
'.homepage .pricing .pricing-box:nth-child(1) p, .homepage .pricing .pricing-box:nth-child(2) p': {
position: 'relative',
  left: '-25px',
},
'.kite-sections': {
  padding: '40px 0',
},
'.kite-sections .demo-link': {
 marginLeft: '24px',
},
'.kite-sections h2': {
  fontWeight: '500',
},
'.kite-sections .mini-container a': {
marginTop: '20px',
},
'.kite-sections .img-right-img .seven': {
  marginLeft: '4%',
  order: 2,
},
'.kite-sections .img-right-img .six:last-child': {
  marginLeft: 0,
},
'.kite-sections .kite-partner-links': {
 display: 'flex',
  alignItems: 'center',
},
'.kite-sections .kite-partner-links a': {
 display: 'inline-block',
 marginRight: '50px',
},
'.kite-sections .kite-partner-links a img': {
  width: '95px',
},
'.kite-sections .kite-mobile-links': {
 marginTop: '50px',
},
'.kite-sections .kite-mobile-links a img': {
 height: '45px',
},
'.kite-sections .console-ipo img': {
 maxWidth: '350px',
},
'.kite-sections .invest-head-img': {
position: 'absolute',
width: '450px !important',
top: '-90px',
 left: 'calc(50% - 225px)',
transition: '.2s all',
},
'.kite-sections .invest-head-img:hover': {
 opacity: '.9',
cursor: 'pointer',
},
'.kite-sections .invest-play-img': {
position: 'absolute',
width: '60px !important',
top: '-2%',
left: 'calc(50% - 25px)',
transition: '.2s all',
},
'.kite-sections .invest-play-img:hover': {
cursor: 'pointer',
},
'.kite-sections .products-video-iframe': {
display: 'none',
  transition: '.2s all',
  position: 'absolute',
  top: '-120px',
  left: 'calc(50% - 310px)',
  border: 'none',
  maxWidth: '100%',
},
'.kitefooter-container': {
  paddingBottom: '60px',          
},

/* Medium screens */
'@media (max-width: 1200px)': {
'.navbar .logo-img': {
  maxHeight: '15px',
   top: '16px',
},
'.navbar-links li a':{
padding: '15px'
},
'.navbar-links #navbar_menu': {
 paddingTop: '15px',
 paddingBottom: '15px',
},
'.navbar-menu': {
 width: '90%',
top: '60px',
},
'.navbar-menu ul li':{
  padding: '8px 15px'
},
'.navbar-menu .menu-footer': {
  padding: '10px 15px',
},
'.navbar-menu .menu-footer .education a': {
 marginRight: '20px',
},
'.hide-on-small':{
display: 'none !important',
},
'.show-on-mobile': {
   display: 'block',
},
'.three':{
flexBasis:'100%',
  width: '100%'
},
 '.six': {
   flexBasis: '48%',
   width: '48%',
  },
   '.five': {
flexBasis: '100%',
  width: '100%',
 },
 '.seven': {
   flexBasis: '100%',
   width: '100%',
  },
'.homepage section': {
 padding: '0 20px 80px 20px',
},
'section:first-child':{
paddingTop: '80px',
paddingBottom: '80px',
},
'body': {
paddingTop: '55px',
},
'.homepage section .landing-image': {
 marginBottom: '30px',
maxHeight: '35vh',
},
 '.homepage section .press-strip': {
  marginTop: '30px',
},
'.kite-sections .kite-partner-links':{
flexDirection:'column',
alignItems:'flex-start'
},
'.kite-sections .kite-partner-links a':{
marginBottom:'15px'
},

},
/* Large screens */
'@media (min-width: 1024px)': {
'.navbar-menu': {
width: '700px',
right: '0px',
},
}
});
},

],
};