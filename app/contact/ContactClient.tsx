'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, User, HelpCircle } from 'lucide-react';

export const ContactClient: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);

      const whatsappNumber = '917025034758';
      const textMessage = `*New Contact Inquiry - BINFried*\n\n` +
        `*Name:* ${formData.name.trim()}\n` +
        `*Email:* ${formData.email.trim()}\n` +
        `*Subject:* ${formData.subject.trim() || 'General Inquiry'}\n\n` +
        `*Message:*\n${formData.message.trim()}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#D71920] text-xs font-bold uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 font-serif tracking-tight">
          Contact Editorial Team
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Have a question about oil temperatures, a recipe tweak, or fried chicken science? Send us a note.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F0E2DE] shadow-xs">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-gray-900">Message Received!</h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to BINFried. Our culinary editors review all reader inquiries and aim to reply within 48 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#D71920] text-white font-bold text-xs hover:bg-[#A80F17]"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Vance"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                Subject
              </label>
              <div className="relative">
                <HelpCircle className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Recipe question, starch substitution, or guide feedback"
                  className="w-full pl-10 pr-4 py-3 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                Message
              </label>
              <div className="relative">
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full p-4 bg-[#FFF8F6] border border-[#F0E2DE] rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D71920] focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#D71920] hover:bg-[#A80F17] text-white font-bold text-base transition-all shadow-md shadow-red-200 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

