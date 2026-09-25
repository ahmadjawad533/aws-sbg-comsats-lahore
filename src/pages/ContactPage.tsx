import React, { useState } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { siteConfig } from '@/data/site';
import { Button } from '@/components/common/Button';
import { SocialLinks } from '@/components/common/SocialLinks';
import {
  MapPin,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  useDocumentTitle(
    'Contact Us',
    'Get in touch with AWS Student Builder Group COMSATS Lahore for event queries, partnerships, and community inquiries.'
  );

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    category: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Realistic simulation of client handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'General Inquiry',
        message: '',
      });
      setErrors({});
    }, 900);
  };

  const faqs = [
    {
      q: 'Who can join the AWS Student Builder Group at COMSATS Lahore?',
      a: 'Any currently enrolled student at COMSATS University Islamabad, Lahore Campus across any department (Computer Science, Software Engineering, EE, Management Sciences, etc.) and any semester is eligible to join. Both beginners and experienced developers are welcome.',
    },
    {
      q: 'Are chapter workshops and events free to attend?',
      a: 'Yes, all community sessions, hands-on workshops, and introductory webinars organized by AWS SBG COMSATS Lahore are 100% free for students.',
    },
    {
      q: 'Do I need prior experience with AWS or cloud computing?',
      a: 'Not at all. We host foundational tracks (e.g. Cloud Practitioner prerequisites) designed specifically for students with zero previous cloud experience, alongside advanced labs for senior builders.',
    },
    {
      q: 'How can our company or society collaborate on a workshop or hackathon?',
      a: `You can submit a proposal through the contact form selecting "Partnership & Sponsorship" or reach out directly to our outreach team via email at ${siteConfig.contactEmail}.`,
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Connect & Inquire</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Have questions about joining, upcoming workshops, volunteering, or exploring partnerships? We would love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Contact Information & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-[#0E131F] border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white mb-2">Chapter Headquarters</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {siteConfig.name}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#FF9900] border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">CAMPUS ADDRESS</span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {siteConfig.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#FF9900] border border-white/10 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">OFFICIAL EMAIL</span>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-xs sm:text-sm text-amber-400 hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono text-slate-400 block mb-2">
                OFFICIAL LINKS & HUBS
              </span>
              <a
                href={siteConfig.socials.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#43E660]/40 flex items-center justify-between text-xs text-slate-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#43E660]" />
                  <span className="font-semibold">Official Linktree Directory</span>
                </div>
                <span className="text-[11px] text-slate-400 group-hover:text-emerald-400">linktr.ee &rarr;</span>
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/40 flex items-center justify-between text-xs text-slate-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="font-semibold">Join Official WhatsApp Community</span>
                </div>
                <span className="text-[11px] text-slate-400 group-hover:text-emerald-400">Join &rarr;</span>
              </a>

              <div className="pt-3">
                <span className="text-xs font-mono text-slate-400 block mb-2">
                  FOLLOW OUR SOCIAL CHANNELS
                </span>
                <SocialLinks size="md" showLabels />
              </div>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10">
            <div className="flex items-center gap-2 text-[#FF9900] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Quick Note</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We usually respond to student inquiries and collaboration proposals within 2-3 business days. For real-time event updates, join our WhatsApp community channel.
            </p>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E131F] border border-white/10 relative">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-8">
              Fill out the form below and our team will get back to your query.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to AWS Student Builder Group COMSATS Lahore. We have logged your message and will review it shortly.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Ali"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@student.cuilahore.edu.pk"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Category Field */}
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors"
                    >
                      <option value="General Inquiry">General Chapter Inquiry</option>
                      <option value="Workshop & Labs">Workshop & Hands-on Labs</option>
                      <option value="Hackathon">Hackathon & Competitions</option>
                      <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
                      <option value="Volunteering">Joining the Volunteer Team</option>
                    </select>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Subject <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is your message regarding?"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your question, project idea, or collaboration proposal..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080B11] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full sm:w-auto"
                    rightIcon={<Send className="w-4 h-4 text-black" />}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="max-w-4xl mx-auto pt-12 border-t border-white/10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Common questions students ask about participating in our chapter.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0E131F] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#FF9900] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
