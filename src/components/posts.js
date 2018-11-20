import React from "react";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(postData => {
        this.setState({ posts: postData });
      });
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <React.Fragment>
        <h3>Hello Posts</h3>
        {postItems}
      </React.Fragment>
    );
  }
}

export default Posts;
