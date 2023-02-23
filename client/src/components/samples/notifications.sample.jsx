import notificationEmail from "../../tools/notifications/email";
import toast, { Toaster } from "react-hot-toast";

const Notification = () => {
    //temporal sample code for email notification and internal notification
    const sendMessage = () => {

        // notification in UI
        toast.promise(notificationEmail('xxxx@gmail.com', 'Nombre', 'Este es un mail de prueba'),
            {
                loading: 'Loading ...',
                success: 'Message sent',
                error: (err) => `Error: ${err}`
            })
    };
    return (<>
        <button onClick={sendMessage} className="btn btn-dark"> send message</button>
        <Toaster position="top-right" toastOptions={{
            duration: 5000,
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
                minWidth: '400px',
            }
        }} />
    </>);
};

export default Notification;
