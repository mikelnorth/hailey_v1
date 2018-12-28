import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HighSchool from '../achievements/HighSchool'
import Club from '../achievements/Club'
import College from '../achievements/College'

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    componentDidMount(){
        this.setState({value:this.props.selected})
    }

    handleChange = (event, value) => {
        this.setState({ value });
        if (this.props.section == 'soccer') {
            this.props.updateState("tab", value)
        }
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    getSwipeableViews = (theme, section) => {
        switch (section) {
            case 'soccer':
                return <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><HighSchool /></TabContainer>
                    <TabContainer dir={theme.direction}><Club /></TabContainer>
                    <TabContainer dir={theme.direction}><College {...this.props}/></TabContainer>
                </SwipeableViews>
            case 'coach':
                return <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><Club /></TabContainer>
                    <TabContainer dir={theme.direction}><HighSchool /></TabContainer>
                </SwipeableViews>
            case 'teacher':
                return <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}><Club /></TabContainer>
                </SwipeableViews>

        }

    }

    render() {
        const { classes, theme, One, Two, Three, section } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        {One&&<Tab label={One} />}
                        {Two&&<Tab label={Two} />}
                        {Three&&<Tab label={Three} />}
                    </Tabs>
                </AppBar>
                {
                    this.getSwipeableViews(theme, section, One, Two, Three)
                }

            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);