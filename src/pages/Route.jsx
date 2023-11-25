import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/router/pages/Layout";
import Home from "../components/router/pages/Home";
import Blog from "../components/router/pages/Blog";
import Contact from "../components/router/pages/Contact";
import NoPage from "../components/router/pages/NoPage";

function RouteComponents() {
  // const [count, setCount] = useState({ a: 5 });
  // const increment = () => {
  //   setCount((prevState) => {
  //     const newState = {
  //       ...prevState,
  //       a: prevState.a + 1,
  //     };
  //     return newState;
  //   });
  // };

  // const decrement = () => {
  //   setCount((prevState) => {
  //     const newState = {
  //       ...prevState,
  //       a: prevState.a - 1,
  //     };
  //     return newState;
  //   });
  // };

  // const [count, setCount] = useState({ a: 0 });
  // const handleIncrement = () => {
  //   setCount((prevState) => {
  //     const newState = {
  //       a: prevState.a + 1,
  //     };
  //     return newState;
  //   });
  // };

  // const handleDecrement = () => {
  //   setCount((prevState) => {
  //     const newState = {
  //       a: prevState.a > 0 ? prevState.a - 1 : 0,
  //     };
  //     return newState;
  //   });
  // };
  return (
    <>
      <div>
        {/* <h1>Increment & Decrement App.</h1>
        <h2>{count.a}</h2>
        <div className="button">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default RouteComponents;
