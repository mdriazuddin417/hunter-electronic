import { Route, Routes } from "react-router-dom";

import About from "./component/About/About";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";
import HomePage from "./component/HomePage/HomePage";
import Reviews from "./component/Reviews/Reviews";
import NotFound from "./component/NotFound/NotFound";

import Review from "./component/Review/Review";
import Dashboard from "./component/Dashboard/Dashboard";

function App() {
  return (
    <div className=" mx-auto max-w-7xl">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}>
          <Route path=":reviewsId" element={<Review />}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
