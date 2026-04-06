import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Flags from "./pages/Flags";
import Emblems from "./pages/Emblems";
import Blog from "./pages/Blog";

const Home = () => <div>Home Page Content</div>;

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/flags" element={<Flags/>}/>
          <Route path="/emblems" element={<Emblems/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Layout>
    </Router>

  );

}

export default App
