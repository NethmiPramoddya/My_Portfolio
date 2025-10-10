import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ subject:"" ,from_name: "", from_email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!")
        setForm({ subject: "", from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Try again later.")
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-lg mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r from-indigo-500 to-purple-600 after:mx-auto after:mt-3">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
         <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Add Subject"
            required
            className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-indigo-500"
          />

          <input
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border-2 border-gray-200 rounded-md p-3 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold shadow-md hover:-translate-y-1 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
