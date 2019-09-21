import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    text: "Hello world!!"
  };

  // PROMESAS
  fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = { method: "GET" };
    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  // Async - await
  async asyncFetchData() {
    // const url = "https://jsonplaceholder.typicode.com/posts";
    // const options = { method: "GET" };
    // const response = await fetch(url, options);
    // const data = await response.json();
    // console.log(data);
    // PROMISE
    // 1 - PENDING
    // 2 - FULLFILED - RESOLVED - OK
    // 3 - REJECTED - FAIL
  }

  // CUANDO EL COMPONENT YA ESTA MONTADO
  componentDidMount() {
    this.asyncFetchData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header name="Maricela" />
        <Content posts={[]} value="1" date={this.props.date} />
        <Footer email="mmiranda@nearsoft.com" />
      </div>
    );
  }
}

export default App;

// MONTAJE

// 1 - CONSTRUCTOR
// 2 - COMPONENT WILL MOUNT
// 3 - RENDER
// 4 - COMPONENTDIDMOUNT
// 5 - COMPONENTWILLUNMOUNT

//COMPONENT WILL UPDATE
//COMPONENT DID UPDATE
