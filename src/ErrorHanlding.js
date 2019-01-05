import * as Sentry from '@sentry/browser';

// Sentry.init({
//  dsn: "https://24ab99c4a6c54f4a8a859b85d2381de7@sentry.io/1364819"
// });
// should have been called before using it here
// ideally before even rendering your react app

class ExampleBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
                <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}