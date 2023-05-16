import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <div className="p-4">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
