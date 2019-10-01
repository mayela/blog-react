import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    text: "Hello world!!",
    posts: [],
  };

  fetchPosts = async function() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = { method: "GET" };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  setPosts = async function() {
    const resultado = await fetchPosts();
    this.setState({
      posts: resultado,
    });
  };
  componentDidMount() {
    this.setPosts();
  }

  render() {
    return (
      <div>
        <Header name="Maricela" />
        <Content posts={this.state.posts} />
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
