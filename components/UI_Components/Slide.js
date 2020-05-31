import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, Box, Fade, Slide } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils'
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    imageRoot: {
        width: '100%',
        height: '85vh',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: '55vh'
        },
        [theme.breakpoints.down('xs')]: {
            height: '75vh'
        },
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    image: {
        maxWidth: '100%',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        width: '100%',
        backgroundColor: theme.palette.transBlack.dark,
        [theme.breakpoints.up('sm')]: {
            maxWidth: '40%'
        },
        padding: theme.spacing(3)
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    back: {
        width: '50vw',
        display: 'flex',
    },
    forward: {
        width: '50vw',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    title: {
        textTransform: 'capitalize'
    }
}))

export function ArticleSlideFrameImage(props) {
    const classes = useStyles();
    return (
        <div className={classes.imageRoot} style={{
            backgroundImage: `url(${props.image})`,
        }}>
            {props.children}
        </div>
    )
}


export function ArticleSlideFrameInfo(props) {

    const classes = useStyles();
    return (
        <div className={classes.infoBox}>
            <Typography color='secondary' variant='body2'>
                {props.category.name}
            </Typography>
            <Typography color='primary' className={classes.title} variant='h4'>
                {props.title}
            </Typography>
            <Typography color='secondary' style={{ marginTop: '2%' }} variant='body1'>
                By {props.writer.first_name + ' ' + props.writer.last_name}
            </Typography>
        </div>
    )
}

export function Frame(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ArticleSlideFrameImage />
            <ArticleSlideFrameInfo />
        </div>
    )
}

export function TabPanel(props) {
    const { children, value, index, loaded, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {
                ((value === index) || (loaded.includes(index))) && (
                    <Slide in={value === index}
                        direction='right'
                        timeout={{
                            appear: 600,
                            enter: 600,
                            exit: 600
                        }}>
                        <div>
                            <Fade in={value === index}
                                timeout={{
                                    appear: 900,
                                    enter: 900,
                                    exit: 900
                                }}>
                                <Box >
                                    {children}
                                </Box>
                            </Fade>
                        </div>

                    </Slide>


                )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function SlideShow(props) {

    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);
    const [loaded, setLoaded] = React.useState([0,])

    const handleNext = (event) => {
        const newValue = (value >= props.data.length - 1) ? (
            0
        ) : (
                value + 1
            );
        if (!loaded.includes(newValue)) {
            const newLoaded = [...loaded, newValue]
            setLoaded(newLoaded)
        }
        setValue(newValue);
    };

    const handlePrev = (event) => {
        const newValue = (value <= 0) ? (
            props.data.length - 1
        ) : (value - 1);
        if (!loaded.includes(newValue)) {
            const newLoaded = [...loaded, newValue]
            setLoaded(newLoaded)
        }
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const imageList = props.data ? (
        props.data.map(frame => {
            return (
                <div key={frame.id}>
                    <ArticleSlideFrameImage image={frame.banner} />
                </div>
            )
        })
    ) : ([]);


    const infoList = props.data ? (
        props.data.map(frame => {
            return (
                <TabPanel key={frame.id}
                    value={value}
                    loaded={loaded}
                    index={props.data.indexOf(frame)}
                    dir={theme.direction}>
                    <ArticleSlideFrameInfo
                        title={frame.title}
                        category={frame.category}
                        writer={frame.writer} />
                </TabPanel>
            )
        })
    ) : ([])
    return (
        <Grid container alignContent='center' className={classes.root}>
            <Grid item xs={12} >
                <AutoPlaySwipeableViews
                    disableLazyLoading={false}
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    interval={5000}>
                    {imageList}
                </AutoPlaySwipeableViews>
            </Grid>
            <Grid item xs={12}>
                {infoList}
            </Grid>
            <Grid className={classes.controls} item xs={12} >
                <div className={classes.back}>
                    <IconButton onClick={handlePrev}>
                        <ArrowBack fontSize='large' />
                    </IconButton>
                </div>
                <div className={classes.forward}>
                    <IconButton onClick={handleNext}>
                        <ArrowForward fontSize='large' />
                    </IconButton>
                </div>


            </Grid>
        </Grid>
    )
}