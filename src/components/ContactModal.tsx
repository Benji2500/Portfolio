import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Copy, Check, Send, Clock, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ModalOverlay, ModalCloseButton } from './ui/ModalOverlay';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: ContactFormState = { name: '', email: '', subject: '', message: '' };

const INPUT_CLASS =
  'w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none';

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { profile } = PORTFOLIO_DATA;
  const { copiedId, copy } = useCopyToClipboard();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>(EMPTY_FORM);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  // Clear pending feedback timers on unmount.
  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const updateField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));

  const copyEmail = () => copy(profile.email, 'email');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
    // Simulated dispatch: keep the success feedback visible, then close.
    timersRef.current.push(
      setTimeout(() => {
        timersRef.current.push(
          setTimeout(() => {
            setFormSubmitted(false);
            setFormData(EMPTY_FORM);
            onClose();
          }, 2500),
        );
      }, 400),
    );
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose} panelClassName="max-w-xl p-6 sm:p-8">
      <ModalCloseButton onClose={onClose} />

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
          <Mail className="w-4 h-4" />
          <span>Connect & Inquire</span>
        </div>
        <h2 className="text-2xl font-bold text-white">Get in Touch with Benjamin</h2>
        <p className="text-sm text-slate-400 mt-1">
          Available for Staff/Senior Engineering opportunities, architectural consulting, or open-source collaboration.
        </p>
      </div>

      {/* Quick Email Copy Box */}
      <div className="p-4 rounded-xl border border-slate-800 bg-[#090b10] flex items-center justify-between gap-4 mb-6">
        <div className="truncate">
          <span className="text-xs text-slate-400 block mb-0.5">Direct Email</span>
          <span className="text-sm font-mono font-medium text-white truncate block">
            {profile.email}
          </span>
        </div>
        <button
          onClick={copyEmail}
          className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-500 transition-colors shrink-0 cursor-pointer"
        >
          {copiedId === 'email' ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Submission success feedback vs. contact form */}
      {formSubmitted ? (
        <div className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Thank you for reaching out. Benjamin typically replies within 24 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={updateField('name')}
                placeholder="Sarah Jenkins"
                className={INPUT_CLASS}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={updateField('email')}
                placeholder="sarah@company.com"
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={updateField('subject')}
              placeholder="Staff Software Engineer Role / Advisory Inquiry"
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={updateField('message')}
              placeholder="Tell Benjamin about the project, architecture challenge, or role..."
              className={INPUT_CLASS}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 py-2.5 text-center text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      )}

      {/* Location & Timezone metadata */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>San Francisco, CA (PST / UTC-7)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Response &le; 24h</span>
        </div>
      </div>
    </ModalOverlay>
  );
};
