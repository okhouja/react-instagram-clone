import React, { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Data from "./data.json";

function App() {
  const [posts, setPosts] = useState([]);

  //console.log(Data);

  return (
    <React.Fragment>
      <Header />
      <Gallery posts={Data} />
    </React.Fragment>
  );
}

export default App;
