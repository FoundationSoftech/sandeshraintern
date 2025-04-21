import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home'
import { ProductProvider } from './component/Home/Context.jsx'
import Mencollection  from './component/gendercategory/MenCollection.jsx'
import WomensCollection from './component/gendercategory/WomenCollection.jsx'
import KidsCollection from './component/gendercategory/KidCollection.jsx'
import Trainings from './component/gendercategory/Trainings.jsx'
import ShowDetails from './component/Detail/ShowDetails.jsx'
import Contact from './component/quicklink/Contact/Contact.jsx'
import About from './component/quicklink/About/About.jsx'
import TermsOfUse from './component/quicklink/Termuse/Termsofuse.jsx'
import PrivacyPolicy from './component/quicklink/Privacy/Privacy.jsx'
import Orderstatus from './component/customercare/Orderstatus.jsx'
import Shipping from './component/customercare/Shipping.jsx'
import Return from './component/customercare/Return.jsx'
import Help from './component/customercare/Help.jsx'
import Signup from './component/Register/Signup.jsx'
import Nike from './component/brands/Nike.jsx'
import Puma from './component/brands/Puma.jsx'
import Adidas from './component/brands/Adidas.jsx'
import Jordan from './component/brands/Jordan.jsx'
import TrendingNow from './component/brands/TrendingNow.jsx'
import NewArrival from './component/brands/NewArrival.jsx'
import Layout from './Layout.jsx'
import All from './component/brands/All.jsx'
import { FavoritesProvider } from './component/Detail/Favouriteprovider.jsx'
import SIgnIn from './component/Register/SIgnIn.jsx'
import Bag from './Bag.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const paths = createBrowserRouter([
  {
    element: <Layout />, // Parent layout component
    children: [
      {path:"/trending",element :<TrendingNow/>},
      {path:"/newarrival",element :<NewArrival/>},
      { path: "/", element: <Home /> },
      { path: "/men", element: <Mencollection /> },
      { path: "/Women", element: <WomensCollection /> },
      { path: "/kid", element: <KidsCollection /> },
      { path: "gym", element: <Trainings /> },
      { path: "details/:id", element: <ShowDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/terms", element: <TermsOfUse /> },
      { path: "/policy", element: <PrivacyPolicy /> },
      { path: "/status", element: <Orderstatus /> },
      { path: "/shipping", element: <Shipping /> },
      { path: "/return", element: <Return /> },
      { path: "/help", element: <Help /> },
      { path: "/signup", element: <Signup /> },
      { path: "/nike", element: <Nike /> },
      { path: "/puma", element: <Puma /> },
      { path: "/adidas", element: <Adidas /> },
      { path: "/jordan", element: <Jordan /> },
      { path: "/allcollection", element: <All /> },
      {
        path:'/signin',
        element:<SIgnIn/>
      },{
        path:"/bag",
        element:<Bag/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>

    <ProductProvider>

    <RouterProvider router={paths}>

      </RouterProvider>
    </ProductProvider>
    </FavoritesProvider>
    <ToastContainer />
  </StrictMode>
);
