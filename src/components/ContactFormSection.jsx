import { useState } from 'react';
import { Send, Mail, Phone, Building, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Reveal } from './Reveal';
import { BinaryAnimation } from './BinaryAnimation';

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // Get your credentials from https://www.emailjs.com/
      // After signing up, create a service and email template
      // Add your credentials to .env file or replace the values below
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Prepare template parameters
      // Make sure your EmailJS template includes these variables:
      // {{from_name}}, {{from_email}}, {{company}}, {{phone}}, {{message}}, {{reply_to}}
      const templateParams = {
        to_email: 'sales@encytro.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #111d1e 0%, #1b2728 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <BinaryAnimation opacity={0.286} />
        
        {/* Darker overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/60 z-[5]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">TOUCH</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal delay={200}>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Field */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-bold text-slate-300 mb-2">
                      <Building className="inline w-4 h-4 mr-2" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-300 mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col items-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-10 py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 disabled:cursor-not-allowed text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/30 overflow-hidden min-w-[200px]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mt-6 px-6 py-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-sm font-medium animate-fade-in">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mt-6 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm font-medium animate-fade-in">
                      ✗ There was an error sending your message. Please try again or contact us directly at sales@encytro.com
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Reveal>

          {/* Contact Information */}
          <Reveal delay={400}>
            <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <Mail className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Email Us</h3>
                <a href="mailto:sales@encytro.com" className="text-teal-400 hover:text-teal-300 transition-colors">
                  sales@encytro.com
                </a>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <Phone className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Call Us</h3>
                <a href="tel:8669499777" className="text-teal-400 hover:text-teal-300 transition-colors">
                  866.949.9777
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
