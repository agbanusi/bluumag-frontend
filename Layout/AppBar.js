import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.transSecondary.main,
        width: '100%',
        padding: theme.spacing(1)
    },
    toolbar: {
        marginBottom: theme.spacing(2)
    },
    tabs: {
        position: 'absolute',
        right: '0%',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    tab: {
        color: 'inherit'
    },
    link: {
        color: theme.palette.tertiary.main,

        '&:hover': {
            color: theme.palette.primary.main
        },
        transition: 'all 0.5s'
    },
    logoBox: {
        width: '20vw',

        [theme.breakpoints.up('sm')]: {
            width: '12vw',
        },
        [theme.breakpoints.up('md')]: {
            width: '7vw',
        },
    },
    logo1: {
        maxWidth: '100%',
    }

}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const location1 = /\/fashion\.*/
    const location2 = /\/lifestyle\.*/
    const location3 = /\/arts_and_culture\.*/
    const router = useRouter();

    const handleChange = (event, newValue) => {

        setValue(newValue);
    };

    const handleClick = (event) => {
        event.preventDefault()
    }

    React.useEffect(() => {
        console.log(router.asPath)
        if (router.asPath.match(location1)) {
            setValue(1);
        } else if (router.asPath.match(location2)) {
            setValue(2);
        } else if (router.asPath.match(location3)) {
            setValue(3);
        } else {
            setValue(0);
        }
    }, [props, location1, location2, location3, router])

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar color='transparent' className={classes.root} elevation={0}>
                    <Toolbar>
                        <div className={classes.logoBox}>
                            <img src='/logo1.png' className={classes.logo1} alt='bluumag' />
                        </div>
                        <Tabs
                            className={classes.tabs}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label='Nada' style={{
                                display: 'none',
                                width: '0%'
                            }} />
                            <Link href='/[groups]' as='/fashion'><span className={classes.link}>
                                <Tab className={classes.tab} label="Fashion" {...a11yProps(0)} />
                            </span></Link>
                            <Link href='/[groups]' as='/lifestyle'><span className={classes.link}>
                                <Tab className={classes.tab} label="Lifestyle" {...a11yProps(1)} />
                            </span></Link>
                            <Link href='/[groups]' as='/arts_and_culture'><span className={classes.link}>
                                <Tab className={classes.tab} label="Arts and Culture" {...a11yProps(2)} />
                            </span></Link>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar className={classes.toolbar} />
        </React.Fragment>


    );
}
