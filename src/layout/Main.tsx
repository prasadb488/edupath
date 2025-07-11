import { Outlet } from "react-router";
import Navbar from "../Components/common/Navbar";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Main;
