import { Posts } from "./components/News";
import { SearchBar } from "./components/SearchBar";
import { InfoProvider } from "./context/Context";

function App() {
  return (
    <InfoProvider>
      <div className="font-mono">
        <header className="bg-gray-400 to-slate-800 text-white max-h-64 h-52 flex items-center justify-center ">
          <nav className="bg-gray-400 w-3/6 h-full py-8 flex flex-col justify-between">
            <div className="flex justify-center text-4xl font-semibold">
              <div>LatestNews</div>
            </div>
            <SearchBar />
          </nav>
        </header>
        <main className="bg-gray-300 flex justify-center py-16 min-h-screen">
          <Posts />
        </main>
      </div>
    </InfoProvider>
  );
}

export default App;
