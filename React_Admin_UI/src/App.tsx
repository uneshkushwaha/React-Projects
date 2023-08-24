import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import User from "./pages/user/User";//singular user is for the user single page details

import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";

 //An <Outlet> should be used in parent route elements to render their child route elements.
import { QueryClient, QueryClientProvider } from 'react-query'//react-query is used for fetching data from the api  like useEffect
import NavBar from "./Components/navbar/NavBar";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/footer/Footer";
import "./styles/global.scss"
const queryClient = new QueryClient()//queryClient is used to fetch data from the api

//layout contains navbar,menu and footer
function App() {

const Layout =()=>{
  return(

    
    <div className="main">
      <NavBar/>

      <div className="container">
        <div className="menuContianer">

          <Menu/>

          </div>
          <div className="contentContainer">
            
          <QueryClientProvider client={queryClient}>
            <Outlet/>
            </QueryClientProvider>

            </div>
            </div>
            

      <Footer/>
      

    </div>
    )
 
};


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      
   //here if path is set as default then home element is also shown in the layout
    {
      path: "/",
      element: <Home/>
      
    },

    {
      path: "/users",
      element: <Users/>,
    },
    {
      path: "/users/:id",
      element: <User/>,
    },
    
    {
      path: "/products",
      element: <Products/>,
    },
    
    {
      path: "/products/:id",
      element: <Product/>,
    },
  ],

},
//login is written outside of the child element of layout,we can create our own layout means single page for the authentication
{
  path: "/login",
  element: <Login/>,
},

  ]);

  return <RouterProvider router={router} />
    

  
}

export default App;
