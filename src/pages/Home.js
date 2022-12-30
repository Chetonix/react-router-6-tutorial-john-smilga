import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="section">Home Page</div>

      {/* <Navbar />
      <section className="section">
        <Outlet />
      </section> */}
    </>
    // <section className="section">
    //   <h2>Home Page</h2>
    //   <Link to="/about" className="btn">
    //     About
    //   </Link>
    // </section>
  );
};
export default Home;
