import "./App.css";
import Featured from "./components/Featured";
import Header from "./components/Header";
import { Info } from "./components/Info";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostFilter from "./components/PostFilter";
import PostGallery from "./components/PostGallery";

function App() {
  return (
    <div class="h-screen flex flex-col">
      <Navbar />
      <div class="container mx-auto px-4 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] mt-2 gap-x-2 overflow-auto md:h-screen scrollbar-hidden">
          <div className="flex flex-col gap-4">
            <Info />
            <PostGallery />
          </div>
          <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hidden">
            <Featured />
            <PostFilter />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
