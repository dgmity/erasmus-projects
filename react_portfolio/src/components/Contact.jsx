import { useState } from "react";

function Contact() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 


    const formData = { name, email, message };

    setName("");
    setEmail("");
    setMessage("");

    alert(`Thanks, ${formData.name}! Your message was sent.`);
  };

  return (
    <section id="contact">
     
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Input your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Input your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea 
          placeholder="Input your message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        
        <button type="submit">Send message</button>
      </form>

      {name && <p>Hello, {name}</p>}
    </section>
  );
}

export default Contact;