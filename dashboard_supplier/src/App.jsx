import { BrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Sidebar from "./components/layout/sidebar/Sidebar";
import AdminLogin from "./pages/Admin/AdminLogin";
import router from "./routes/Router";

function App() {
  return (
    <div >

      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
