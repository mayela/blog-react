import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    text: "Hello world!!"
  };
  render() {
    const posts = [
      { title: "title 1", content: "content 1" },
      { title: "title 2", content: "content 2" },
      { title: "title 3", content: "content 2" }
    ];
    console.log(this.props);
    return (
      <div>
        <Header name="Maricela" />
        <Content posts={posts} />
        <Footer email="mmiranda@nearsoft.com" />
      </div>
    );
  }
}

export default App;
