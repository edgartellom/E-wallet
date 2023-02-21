import Phones_home from "../../commons/Phone_home/Phone_home";
import Products_List from "../../components/Products_List/Products_List";
import Banner from "./Banner";
import Carrusel from "../../commons/Carrusel/Carrusel";
import notificationEmail from "../../tools/notifications/email";

const HomePage = () => {


  const sendMessage= () => {
    notificationEmail('rolandosamuel.rq@gmail.com','Rolando', 'Este es un mail de prueba');
  };

  return (
    <>
  
      <section className="py-5">
        <div>
         <Carrusel/>
         <div>
          <Phones_home/>
         </div>
         <div>
          <button onClick={sendMessage} className="btn btn-dark"> send message</button>
         </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
