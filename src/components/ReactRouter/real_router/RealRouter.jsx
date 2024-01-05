/* eslint-disable no-unused-vars */
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const RealRouter = () => {
  let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
};

export default RealRouter;
