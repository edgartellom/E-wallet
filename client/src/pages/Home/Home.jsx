import Phones_home from "../../commons/Phone_home/Phone_home";
// import Products_List from "../../components/Products_List/Products_List";
// import Banner from "./Banner";
import Carrusel from "../../commons/Carrusel/Carrusel";
import Notification from "../../components/samples/notifications.sample";
const HomePage = () => {

  //temporal sample code for email notification and internal notification
  const sendMessage = () => {
      
    // notification in UI
      toast.promise(notificationEmail('xxx@gmail.com', 'Nombre', 'Este es un mail de prueba'),
      {
        loading:'Loading ...',
        success: 'Message sent',
        error: (err)=> `Error: ${err}`
      })
  };

  return (
    <>

      <section className="py-5">
        <div>
          <Carrusel />
          <div>
            <Phones_home />
          </div>
          <div>
            {/*temporal sample button and Tag(Toaster) for notifications  */}
            <button onClick={sendMessage} className="btn btn-dark"> send message</button>
            <Toaster  toastOptions={{ duration: 5000, style:{minWidth: '400px',}}} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
