import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSending, setIsSending] = useState(false); // Added loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS configuration - Replace with your actual credentials
    const serviceID = 'service_gue5dka';     // Get from EmailJS dashboard
    const templateID = 'template_9ygzu7u';   // Get from EmailJS dashboard
    const publicKey = 'Ly-6EJ7puGkCpMQ0V';     // Get from EmailJS dashboard

    // Prepare email parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'abuubaidaalj@gmail.com',    // Your predefined email
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-teal mx-auto mb-6"></div>
          <p className="text-lg text-white/70">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-accent-purple/10 rounded-full mr-4">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Email</h4>
                  <p className="text-white/70">
                    <a href="mailto:abuubaidaalj@gmail.com" className="hover:text-accent-purple">
                      abuubaidaalj@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-accent-teal/10 rounded-full mr-4">
                  <Phone className="w-5 h-5 text-accent-teal" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Phone</h4>
                  <p className="text-white/70">+92 3265327377</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-accent-purple/10 rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-white">Location</h4>
                  <p className="text-white/70">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ubaida10"
                  className="p-3 bg-accent-purple/10 rounded-full hover:bg-accent-purple/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-accent-purple" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abu-ubaida-aljerah/"
                  className="p-3 bg-accent-teal/10 rounded-full hover:bg-accent-teal/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-accent-teal" />
                </a>
                <a
                  href="mailto:abuubaidaalj@gmail.com"
                  className="p-3 bg-accent-purple/10 rounded-full hover:bg-accent-purple/20 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-accent-purple" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple/50 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple/50 text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-accent-purple/50 text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSending} // Disable button while sending
                className={`px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-teal rounded-lg font-medium text-white transition-opacity duration-300 flex items-center gap-2 ${
                  isSending ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                <Send className="w-4 h-4" />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;