import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import Home from "./section/home/Home"
import Business from "./section/business/Business"
import Customer from "./section/customer/Customer"
import Rootlayout from "./layouts/Rootlayout";
import Errors from "./section/error/Errors";

function App() {
   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route element={<Rootlayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/customer" element={<Customer/>} />
          </Route>
         
         <Route path="*" element={<Errors/>}/>
      </>

    )
  );




  return (<RouterProvider router={router}/>)
}

export default App
