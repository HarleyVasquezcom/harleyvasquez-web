"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";
import { trackContactSubmit } from "@/lib/analytics";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      trackContactSubmit();
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-foreground/70 mb-6">
              Interested in working together? Send me a message and I&apos;ll get back to you as soon as possible.
            </p>
            
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors"
            >
              <Mail size={24} />
              <span className="text-lg">{SITE.email}</span>
            </a>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 rounded-xl glass text-center">
                <p className="text-accent text-lg font-semibold mb-2">Message sent!</p>
                <p className="text-foreground/60">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-surface-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-surface-border focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-surface-border focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
