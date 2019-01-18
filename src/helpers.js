const axios = require('axios');
const LogRocket = require('logrocket');
const setupLogRocketReact = require('logrocket-react');

module.exports = {
    guid: function () {
        var nav = window.navigator;
        var screen = window.screen;
        var guid = nav.mimeTypes.length;
        guid += nav.userAgent.replace(/\D+/g, '');
        guid += nav.plugins.length;
        guid += screen.height || '';
        guid += screen.width || '';
        guid += screen.pixelDepth || '';
        return guid;
    },
    setCookie: function () {
        if (document.cookie.indexOf('user_id') === -1) {
            console.info('setting cookie')
            var CookieDate = new Date();
            CookieDate.setFullYear(CookieDate.getFullYear() + 1);
            document.cookie = 'user_id=' + this.guid() + '; expires=' + CookieDate.toGMTString() + ';';
        }
    },
    getCookie: function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    initLogRocket: function () {
        axios.get('https://api.ipify.org?format=json')
            .then(res => {
                let ip = res.data.ip
                LogRocket.init(process.env.REACT_APP_LOGROCKET_INIT);
                let id = process.env.REACT_APP_BUILD !== 'dev' ? this.getCookie('user_id') : "Local ID"
                LogRocket.identify(id, {
                    IP: ip,
                    // email: 'Saget',
                    // Add your own custom user variables here, ie:
                    // subscriptionType: 'pro'
                });
                setupLogRocketReact(LogRocket);
            })
            .catch(err => console.error(err))
    },
    initSentry: function (Sentry) {
        Sentry.init({
            dsn: `https://${process.env.REACT_APP_SENTRY_KEY}@sentry.io/${process.env.REACT_APP_SENTRY_ID}`,
        });
        // Sentry.configureScope(scope => {
        //     scope.addEventProcessor(async (event) => {
        //         event.extra.sessionURL = LogRocket.sessionURL;
        //         return event;
        //     });
        // });
    },
}