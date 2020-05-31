import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import SlideShow from '../components/UI_Components/Slide';
import Main from '../components/UI_Components/homeCategories';

const useStyles = theme => (
  {
    root: {
      width: '100%'
    }
  }
)

class Index extends React.PureComponent {
  componentDidMount() {
    this.props.fetch('fetch', 'nothing', 'nothing')
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    const contentList = this.props.posts ? (
      this.props.posts.map(post => {
        if (post.name === 'featured') {
          return <SlideShow data={post.posts} key={this.props.posts.indexOf(post)} />
        } else if (post.main) {
          return <Main variant='main' category={post} key={this.props.posts.indexOf(post)} />
        } else {
          return <Main variant='normal' category={post} key={this.props.posts.indexOf(post)} />
        }
      })
    ) : (
        <div>
          Nothing yet o
        </div>
      )
    return (
      <Grid className={classes.root} container>
        <Grid item>
          {contentList}
        </Grid>
      </Grid>
    )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    fetch: (operation, group, category) => {
      dispatch(fetchPosts(operation, group, category))
    }
  }
}
export async function getStaticProps() {
  const res = await axios.get('http://127.0.0.1:8000/api/posts/home/nothing/nothing/')
  const posts = res.data


  return {
    props: {
      posts
    },
  }
}

export default withStyles(useStyles)(connect(null, mapDispatchToProps)(Index))
