import React from "react";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onNewPostSubmit = this.onNewPostSubmit.bind(this);
  }

  onNewPostSubmit(event) {
    event.preventDefault();
    let data = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(postData => {
        console.log("posts", postData);
      });
  }

  onChange(event) {
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h3>New Posts</h3>
        <form name="newPost" onSubmit={this.onNewPostSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <p />
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          />
          <p />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewPost;
