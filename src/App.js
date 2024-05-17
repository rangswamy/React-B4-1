
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from './components/Header';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigation />} /> */}
          <Route path="/*" element={<Header />} />
          {/* <Route path="/add" element={<><Navbar /><Empdeatil /></>} />;
        <Route path="/view/:id" element={<> <Navbar /> <View /> </>} />;
        <Route path="/*" element={<Nopage />} /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
