import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import WcIcon from '@material-ui/icons/Wc';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import MoodIcon from '@material-ui/icons/Mood';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WorkIcon from '@material-ui/icons/Work';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PaletteIcon from '@material-ui/icons/Palette';



/*
FaceIcon for make me up
WcIcon for style my celeb
SportsKabaddiIcon for Fash slam
MoodIcon for Face of bluumag
LocalLibraryIcon for as a student
WorkIcon for like a boss
RestaurantMenuIcon for Lick your spoon
LocalHospitalIcon for my health
FitnessCenterIcon for work it out
EmojiPeopleIcon for mens den
AnnouncementIcon for stay woke
AllInclusiveIcon for iconic et exotic
LocationOnIcon for this is africa
PaletteIcon for color me black
*/

const IconChooser = (title) => {
    switch (title) {
        case "Make Me Up": return <FaceIcon color="primary" />;
        case "Style My Celeb": return <WcIcon color="primary" />;
        case "Fash Slam": return <SportsKabaddiIcon color="primary" />;
        case "Face Of Bluumag": return <MoodIcon color="primary" />;
        case "As A Student": return <LocalLibraryIcon color="primary" />;
        case "Like A Boss": return <WorkIcon color="primary" />;
        case "Lick Your Spoon": return <RestaurantMenuIcon color="primary" />;
        case "My Health, My Life": return <LocalHospitalIcon color="primary" />;
        case "Work It Out": return <FitnessCenterIcon color="primary" />;
        case "Men's Den": return <EmojiPeopleIcon color="primary" />;
        case "Stay Woke": return <AnnouncementIcon color="primary" />;
        case "Iconic Et Exotic": return <AllInclusiveIcon color="primary" />;
        case "This Is Africa": return <LocationOnIcon color="primary" />;
        case "Color Me Black": return <PaletteIcon color="primary" />
        default: return <PaletteIcon color="primary" />
    }
}


const useStyles = makeStyles(theme => ({
    root: {

        padding: theme.spacing(6, 9),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(6, 2)
        },
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(0, 0, 0, 0.4)',
        borderBottomWidth: '1px',
    },
    infoRoot: {
        background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))',
        textAlign: 'center',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
        width: '100%',
        padding: theme.spacing(5),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(9)
        },
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.7s ease'

    },
    categoryTitle: {
        width: '100%',
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    },
    mainBack: {
        display: 'block',
        padding: '0%',
        margin: '0%',
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.7s ease',
        overflow: 'hidden'

    },
    mainRoot: {
        height: '80vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',

        margin: theme.spacing(0, -9),
        [theme.breakpoints.down('md')]: {
            height: '55vh'
        },
        [theme.breakpoints.down('xs')]: {
            height: '75vh',
            margin: theme.spacing(0, -2),

        },
        padding: 0,
        position: 'relative',
        '& span': {
            display: 'block',
            width: '100%',
            height: 'inherit',
            maxHeight: '0px',
            transition: 'all 0.7s ease',
            overflow: 'hidden',
            opacity: '0'


        },
        '&:hover span': {
            maxHeight: '200px',
            opacity: '1'
        },
        '&:hover main': {
            transform: 'scale(1.2)'
        }


    },
    secondMainRoot: {
        minHeight: '50vh',
        textTransform: 'capitalize',
        borderRadius: '1%',
        backgroundColor: 'white',
        [theme.breakpoints.down('md')]: {

            minHeight: '27vh'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '20vh'
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '37vh',
        },

        '&:hover main': {
            transform: 'scale(1.2)'
        },
        '&:hover div': {
            color: theme.palette.primary.main
        }

    },
    secondMainBack: {
        display: 'block',
        padding: '0%',
        margin: '0%',
        minHeight: '40vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '20vh',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '25vh',
        },
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.7s ease'
    },
    secondMainBackContainer: {
        width: '100%',
        overflow: 'hidden'
    },
    secondMainInfo: {
        padding: theme.spacing(4, 2),
        minHeight: '12vh',
        transition: 'all 0.7s ease'
    },
    thirdMainRoot: {
        width: '100%',
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.primary.main,
        borderRightWidth: '0.2em',
        minHeight: '15vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '10vh',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '14vh',
        },
        padding: theme.spacing(1),
        marginTop: theme.spacing(3),
        transition: 'all 0.7s ease',
        '&:hover': {
            borderRightWidth: '0.6em',
        },
        '&:hover main': {
            transform: 'scale(1.2)'
        },
        '&:hover div': {
            color: theme.palette.primary.main
        }
    },
    thirdMainBackContainer: {
        width: '37%',
        minHeight: '15vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '10vh',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '14vh',
        },
        overflow: 'hidden'
    },
    thirdMainBack: {
        display: 'block',
        padding: '0%',
        margin: '0%',
        minHeight: '15vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '10vh',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '14vh',
        },
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.7s ease'
    },
    thirdMainInfo: {
        paddingLeft: theme.spacing(1),
        transition: 'all 0.7s ease',
    },
    fourthMainRoot: {
        width: '100%',
        minHeight: '70vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '45vh'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '40vh'
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '60vh',

        },
        padding: theme.spacing(1),
        marginTop: theme.spacing(3),
        transition: 'all 0.7s ease',
        '&:hover main': {
            transform: 'scale(1.2)'
        },
        '&:hover span': {
            color: theme.palette.primary.main
        }
    },
    fourthMainBackContainer: {
        minHeight: '70vh',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            minHeight: '45vh'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '40vh'
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '60vh',

        },
    },
    fourthMainBack: {
        display: 'block',
        padding: '0%',
        margin: '0%',
        minHeight: '70vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '45vh'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '40vh'
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '60vh',

        },
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 0.7s ease'
    },
    fourthMainInfo: {
        padding: theme.spacing(4, 2),
        transition: 'all 0.7s ease',
    },
    title: {
        textTransform: 'capitalize'
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
}));

var verticalGrid = [];


export default function Main(props) {
    const classes = useStyles();
    const theme = useTheme();
    const postList = props.category ? (
        props.variant === 'main' ? (
            props.category.posts.map(post => {
                if (props.category.posts.indexOf(post) === 0) {
                    return (
                        <Link key={props.category.posts.indexOf(post)} href=''>
                            <Grid sm={12} item>
                                <div className={classes.mainRoot}>
                                    <main className={classes.mainBack} style={{
                                        backgroundImage: `url(${post.banner})`
                                    }}></main>
                                    <div className={classes.infoRoot}>
                                        <Typography color='secondary' variant='body2'>
                                            {post.category.name}
                                        </Typography>
                                        <Typography className={classes.title} color='secondary' variant="h4">
                                            {post.title}
                                        </Typography>
                                        <Typography color='secondary' style={{ marginTop: '2%' }} variant="body1">
                                            By {post.writer.first_name + ' ' + post.writer.last_name}
                                        </Typography>
                                        <span>
                                            <Typography color='secondary' variant="body2">
                                                {post.description} <Link href=''><a className={classes.link}>Keep talking</a></Link>
                                            </Typography>
                                        </span>
                                    </div>
                                </div>

                            </Grid>
                        </Link>

                    )
                } else if ((props.category.posts.indexOf(post) === 1) ||
                    (props.category.posts.indexOf(post) === 2) ||
                    (props.category.posts.indexOf(post) === 3) ||
                    (props.category.posts.indexOf(post) === 4) ||
                    (props.category.posts.indexOf(post) === 5) ||
                    (props.category.posts.indexOf(post) === 6)) {
                    return (
                        <Link href='' key={props.category.posts.indexOf(post)}>
                            <Grid item sm={6} md={4} xl={3} xs={6}>
                                <div className={classes.secondMainRoot}>
                                    <div className={classes.secondMainBackContainer}>
                                        <main className={classes.secondMainBack} style={{
                                            backgroundImage: `url(${post.banner})`
                                        }}></main>
                                    </div>
                                    <div className={classes.secondMainInfo}>
                                        <Typography variant="button">{post.title}</Typography>
                                        <br /><br />
                                        <Typography variant="body2" >By {post.writer.first_name + " " + post.writer.last_name}</Typography>
                                    </div>
                                </div>

                            </Grid>
                        </Link>

                    )

                }
                // else {
                //     return (
                //         <Link href='' key={props.category.posts.indexOf(post)}>
                //             <Grid item sm={6} md={6} lg={3} xs={12}>
                //                 <Grid className={classes.thirdMainRoot} container>
                //                     <Grid xs={5} className={classes.thirdMainBackContainer} item>
                //                         <main className={classes.thirdMainBack} style={{
                //                             backgroundImage: `url(${post.banner})`
                //                         }}></main>
                //                     </Grid>
                //                     <Grid xs={7} className={classes.thirdMainInfo} item>
                //                         <Typography variant="button">{post.title}</Typography>
                //                     </Grid>
                //                 </Grid>
                //             </Grid>
                //         </Link>
                //     )
                // }


            })
        ) : (
                props.category.posts.map(post => {
                    if (props.category.posts.indexOf(post) === 0) {
                        return (
                            <Link href='' key={props.category.posts.indexOf(post)}>
                                <Grid item xs={12} md={8}>
                                    <Grid className={classes.fourthMainRoot} container>
                                        <Grid xs={12} className={classes.fourthMainBackContainer} item>
                                            <main className={classes.fourthMainBack} style={{
                                                backgroundImage: `url(${post.banner})`
                                            }}></main>
                                        </Grid>
                                        <Grid xs={12} className={classes.fourthMainInfo} item>
                                            <Typography variant="body2">{post.category.name}</Typography><br />
                                            <span><Typography variant="h4" className={classes.title}>{post.title}</Typography></span><br />
                                            <Typography variant="body1">{post.description}</Typography><br /><br />
                                            <Typography variant="body2" >By {post.writer.first_name + " " + post.writer.last_name}</Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Link>
                        )
                    } else {
                        if (props.category.posts.indexOf(post) === 6) {
                            return (
                                <Grid key={props.category.posts.indexOf(post)} item sm={12} md={4} xs={12}>
                                    <Grid container>
                                        {verticalGrid}
                                    </Grid>
                                </Grid>
                            )
                        } else if (props.category.posts.indexOf(post) < 6) {
                            const item = (<Link href='' key={props.category.posts.indexOf(post)}>
                                <Grid item sm={6} md={12} xs={12}>
                                    <Grid className={classes.thirdMainRoot} container>
                                        <Grid xs={5} className={classes.thirdMainBackContainer} item>
                                            <main className={classes.thirdMainBack} style={{
                                                backgroundImage: `url(${post.banner})`
                                            }}></main>
                                        </Grid>
                                        <Grid xs={7} className={classes.thirdMainInfo} item>
                                            <Typography variant="button">{post.title}</Typography><br /><br />
                                            <Typography variant="body2" >By {post.writer.first_name + " " + post.writer.last_name}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Link>)
                            verticalGrid.push(item);
                            return (
                                <div key={props.category.posts.indexOf(post)}></div>
                            )
                        }

                    }

                })
            )
    ) : ([])
    return (
        <div className={classes.root} style={(props.category.main === true) ? ({ backgroundColor: theme.palette.grey[200] }) : ({ backgroundColor: 'white' })}>
            <Typography className={classes.categoryTitle} variant='h5'>{IconChooser(props.category.name)}{" " + props.category.name}</Typography>
            <Grid container spacing={3}>
                {postList}
            </Grid>

        </div>
    )
}

