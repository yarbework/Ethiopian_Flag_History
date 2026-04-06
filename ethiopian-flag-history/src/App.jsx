import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = () => <div>Home Page Content</div>;
const Flags = () => <div>Flags Page Content</div>;
const Emblems = () => <div>Emblems Page Content</div>;
const Blog = () => <div>Blog Page Content</div>;

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
