import "./App.css";
import Header from "./components/Header";
import { Info } from "./components/Info";
import Post from "./components/Post";

function App() {
  return (
    <div class="min-h-screen">
      <div class="container mx-auto px-4 lg:px-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto] mt-2">
          <div>
            <Info />
          </div>
          <div>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
