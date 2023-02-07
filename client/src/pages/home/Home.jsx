import Filter from "../../components/Filters";
import Products_List from "../../components/products_list/products_list";
import Banner from "./Banner";
import { useState } from "react";

const HomePage = () => {

  const [order, setOrder] = useState("")
  const [currentPage, setCurrentPage] = useState(1)


  return (
    <>
      <Banner></Banner>
      <Filter
        setOrder={setOrder}
        setcurrentPage={setCurrentPage}
      />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <Products_List />
        </div>
      </section>
    </>
  );
};

export default HomePage;
