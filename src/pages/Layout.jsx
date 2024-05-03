import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"
import { createContext } from "react";

export const AppContext = createContext();

const Layout = () => {
  const productList = [
    {
      id: 1,
      title: "Myths About Weight loss (Last One Is Shocking)",
      category: "Health",
      image: 'https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      title: "Do Gummies Actualy Work ?",
      category: "General",
      image:"https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "10 Facts About Green Tea You Didn't Know",
      category: "Diet",
      image:"https://images.unsplash.com/photo-1601477572224-cb15a76f30f4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Superfoods To Add To Your Diet",
      category: "Weight Loss",
      image: "https://plus.unsplash.com/premium_photo-1663852296771-42fa57b3044b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Find Out What Alcohol Does To Your Blood Sugars",
      category: "Weight Loss",
      image: "https://images.unsplash.com/photo-1518645666305-5f5e7469e52a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
 
  return (
    <>
      <AppContext.Provider value={productList}>
        <Navbar />
        <Outlet />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default Layout;
