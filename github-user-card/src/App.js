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
      .get("http://api.github.com/users/tetondan/followers") // Used instructor Dan's followers as I have 0
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
          key={this.state.user.login}
          name={this.state.user.name}
          avatar_url={this.state.user.avatar_url}
          html_url={this.state.user.html_url}
        />
          <h2>Instructor Dan Frehner's Followers:</h2>
        <div className="followers">
          {this.state.followers.map((item) => (
            <Card
              key={item.login}
              name={item.login}
              avatar_url={item.avatar_url}
              html_url={item.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
