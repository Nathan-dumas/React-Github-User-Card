import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount(){
    axios.get('http://api.github.com/users/Nathan-dumas')
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
