import emailjs from "@emailjs/browser";

export const env={
    serviceId: import.meta.env.VITE_EMAIL_SERVICE_ID,
    publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    templateId: import.meta.env.VITE_EMAIL_TEMPLATE_ID
}

const notificationEmail = (email, name, message )=>{
    
    
    const form ={
        email_to: email,
        to_name: name,
        reply_to:'',
        message: message
    }
    console.log(env)
// send notification email with parameters from form
    emailjs.send(
        env.serviceId,
        env.templateId,
        form,
        env.publicKey
    )
    .then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log(err);
    });


}

export default notificationEmail;