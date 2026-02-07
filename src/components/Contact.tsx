import { motion } from "framer-motion";
import { Mail, Phone, Send, Download } from "lucide-react";
import { useRef, useState, FormEvent } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      subject: "Portfolio Contact", // Default subject or add field
      message: formData.get("message"),
    };

    try {
      await axios.post('http://localhost:3001/api/contact', data);
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent successfully!");
      if (form.current) form.current.reset();
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Ready To Get <br /><span className="text-primary">Started?</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Got a project in mind? Let's discuss how we can help you build your digital presence.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm"><Mail className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-500 text-sm">derek@derekcodes.online</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm"><Phone className="text-primary" /></div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <p className="text-slate-500 text-sm">+234 708 602 0081</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="/resume.pdf" download className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100"
          >
            {!submitted ? (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" name="user_name" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" name="user_email" required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20">
                  {loading ? "Sending..." : <><span>Send Message</span><Send size={18} /></>}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-500">I'll get back to you as soon as possible.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-medium hover:underline">Send another message</button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
