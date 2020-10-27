import React from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://api.github.com/users/Nathan-dumas")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("http://api.github.com/users//Nathan-dumas/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Card
          name={this.state.user.name}
          location={this.state.user.location}
          avatar_url={this.state.user.avatar_url}
          bio={this.state.user.bio}
          html_url={this.state.user.html_url}
          following={this.state.user.following}
          followers={this.state.user.followers}
        />
      </div>
    );
  }
}

export default App;
