import Products_List from "../../components/products_list/products_list";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
      
          <Products_List />
   
        </div>
      </section>
    </>
  );
};

export default HomePage;
