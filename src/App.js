import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList"
import { useState } from "react";
import PostListContextProvider from "./store/post-list-store";

function App() {

  const [selected,setSelected] = useState("Home")

  return (
    <PostListContextProvider>
    <div className="app-container">
      <Sidebar
      selected={selected}
      setSelected={setSelected}
      />
      <div className="content">
     <Header/>
     {selected === "Home" ?
     (<PostList/>):
     (<CreatePost/>)
    }
     <Footer/>
     </div>
    </div>
    </PostListContextProvider>
  );
}

export default App;
