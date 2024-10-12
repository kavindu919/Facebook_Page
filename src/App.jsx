import "./App.css";
import Featured from "./components/Featured";
import Header from "./components/Header";
import { Info } from "./components/Info";
import Post from "./components/Post";
import PostGallery from "./components/PostGallery";

function App() {
  return (
    <div class="min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] mt-2 gap-x-2">
          <div className="flex flex-col gap-4">
            <Info />
            <PostGallery />
          </div>
          <div>
            <Featured />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
