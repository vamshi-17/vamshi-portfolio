import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { CONFIG } from '../../config/site.config';
import SocialIcon from '../shared/social-icon.component';
import { useTheme } from '../../context/theme-context';
import useScrollAnimation from '../../hooks/use-scroll-animation.hook';
import SectionTitle from '../shared/section-title.component';
import { useState } from 'react';
import { EMAILJS_CONFIG } from '../../config/seo.config';
import { FormData } from '../../types/ui.types';

// Contact Form Component with EmailJS
const ContactForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Load EmailJS dynamically
      const emailjs = await import('@emailjs/browser');

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: CONFIG.site.email
        },
        EMAILJS_CONFIG.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing directly at ' + CONFIG.site.email);
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className={`block text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'} rounded-lg sm:rounded-xl focus:border-cyan-500 focus:outline-none transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm sm:text-base disabled:opacity-50`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={`block text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'} rounded-lg sm:rounded-xl focus:border-cyan-500 focus:outline-none transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm sm:text-base disabled:opacity-50`}
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label className={`block text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'} rounded-lg sm:rounded-xl focus:border-cyan-500 focus:outline-none transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-sm sm:text-base disabled:opacity-50`}
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label className={`block text-xs sm:text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'sending'}
          rows={5}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100'} border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300'} rounded-lg sm:rounded-xl focus:border-cyan-500 focus:outline-none transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'} resize-none text-sm sm:text-base disabled:opacity-50`}
          placeholder="Tell me about your project or opportunity..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg sm:rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            Send Message
          </>
        )}
      </button>
      {status === 'success' && (
        <p className="text-center text-green-500 font-medium text-sm sm:text-base">✓ Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500 font-medium text-xs sm:text-sm">{errorMessage}</p>
      )}
    </form>
  );
};



// Contact Section Component
const ContactSection = () => {
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Open to Full Stack Developer roles - let's build something great!">
          Get In Touch
        </SectionTitle>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 sm:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-500">Let's Connect</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base`}>
                I'm actively seeking Full Stack Software Developer opportunities where I can leverage my expertise in React, Spring Boot, AWS, and DevOps to build scalable solutions.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className={`flex items-center gap-3 sm:gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 flex-shrink-0" />
                <a href={`mailto:${CONFIG.site.email}`} className="hover:text-cyan-500 transition-colors break-all">
                  {CONFIG.site.email}
                </a>
              </div>
              <div className={`flex items-center gap-3 sm:gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 flex-shrink-0" />
                <span>{CONFIG.site.phone}</span>
              </div>
              <div className={`flex items-center gap-3 sm:gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 flex-shrink-0" />
                <span>{CONFIG.site.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:pt-4">
              <SocialIcon
                href={`mailto:${CONFIG.site.email}`}
                icon={<Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} group-hover:text-cyan-500 transition-colors duration-300`} />}
                label="Email"
              />
              <SocialIcon
                href={CONFIG.site.social.github}
                icon={<Github className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} group-hover:text-cyan-500 transition-colors duration-300`} />}
                label="GitHub"
              />
              <SocialIcon
                href={CONFIG.site.social.linkedin}
                icon={<Linkedin className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} group-hover:text-cyan-500 transition-colors duration-300`} />}
                label="LinkedIn"
              />
            </div>
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${theme === 'dark' ? 'border-cyan-500/20' : 'border-cyan-300/50'} hover:border-cyan-500 transition-all duration-500`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-500">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;