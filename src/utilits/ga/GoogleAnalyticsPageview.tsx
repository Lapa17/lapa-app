import React from 'react';
import { withRouter } from 'react-router-dom';

class GoogleAnalyticsPageview extends React.Component {
    componentWillUpdate ({ location, history }:any) {
        //@ts-ignore
        const gtag = window.gtag;
        //@ts-ignore
        if (location.pathname === this.props.location.pathname) {
            return;
        }

        if (history.action === 'PUSH' &&
            typeof(gtag) === 'function') {
            gtag('config', 'UA-156420292-2', {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_path': location.pathname
            });
        }
    }

    render () {
        return null;
    }
}
//@ts-ignore
export default withRouter(GoogleAnalyticsPageview);