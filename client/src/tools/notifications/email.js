import emailjs from "@emailjs/browser";

export const env={
    serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    templateId:import.meta.env.VITE_EMAIL_TEMPLATE_ID
}

const notificationEmail = async (email, name, message )=>{
    
    
    const form ={
        email_to: email,
        to_name: name,
        reply_to:'',
        message: message
    }
// send notification email with parameters from form
    emailjs.send(
        env.serviceId, env.templateId,form, env.publicKey
    )
    .then((result)=>{
        return result;
    }, (err)=>{
        return err;
    });


}

export default notificationEmail;