import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import CreatePost from "../components/CreatePost/CreatePost";
import AllPostList from "../components/AllPostList/AllPostList";
import { useState } from "react";
import PostListProvider from "../components/Stores/PostListStore";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  function handleClick(e) {
    setSelectedTab(e.target.innerText);
  }
  return (
    <PostListProvider>
      <div className="parent">
        <Sidebar selectedTab={selectedTab} handleClick={handleClick} />
        <div className="right-box">
          <Header />
          {selectedTab === "Home" ? <AllPostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
