import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'

const styles = {
    list: {
        width: 250,
        paddingTop: '1.5em',
    },
    item: {
        paddingLeft: '2em',
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link:{
        textDecoration: 'none',
        color: '#696767',
    },
    bottom:{
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5em',
        width: '81%',
        padding: '1em',
        justifyContent: 'center',
    },
    icons:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    }
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <Link to="/" className={classes.link}>
                    <ListItem button className={classes.item}>
                        <ListItemText primary={'About'} />
                    </ListItem>
                </Link>
                <Divider />
                <Link to="/blog" className={classes.link}>
                    <ListItem button className={classes.item}>
                        <ListItemText primary={'Blog'} />
                    </ListItem>
                </Link>
                <Divider />
                <a href="https://trainlikeagirl.setmore.com/resourcebookingpage/r7ed71544757284692" target="_blank" rel="noopener noreferrer" className={classes.link}>
                    <ListItem button className={classes.item}>
                        <ListItemText primary={'Book Training'} />
                    </ListItem>
                </a>
                <Divider />
                <Link to="/contact" className={classes.link}>
                    <ListItem button className={classes.item}>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </Link>
                <div className={classes.bottom}>
                    <div className={classes.icons}>
                        <a className={classes.link} href="https://www.instagram.com/haileyskol.north/?hl=en" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram instagram" /></a>
                        <a className={classes.link} href="https://twitter.com/soccer30girl" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square twitter" /></a>
                        <a className={classes.link} href="https://www.youtube.com/channel/UC-tQNJMwd7UIZgrJKbLMZEw" rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube youtube" /></a>
                    </div>
                </div>

            </div>
        );

        const fullList = (
            <div className={classes.fullList}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div className='mobile-nav'>
                {/* <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button> */}
                <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
                <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
                <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button> */}
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

                {/* <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer
                    anchor="bottom"
                    open={this.state.bottom}
                    onClose={this.toggleDrawer('bottom', false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('bottom', false)}
                        onKeyDown={this.toggleDrawer('bottom', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                        {sideList}
                    </div>
                </Drawer> */}
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);