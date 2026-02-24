import { useState } from 'react';
import { Copy, Check, X, ArrowRight } from 'lucide-react';
import { resumeData } from '../data/resume';
import { ContactModal } from './ContactModal';

interface EmailButtonProps {
  /** 'icon' renders the Mail icon button (Hero), 'text' renders the text link (Footer) */
  variant: 'icon' | 'text';
  /** Which side to anchor the popup — default 'right' */
  align?: 'left' | 'right';
  icon?: React.ElementType;
}

export const EmailButton = ({ variant, align = 'right', icon: Icon }: EmailButtonProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="relative">
        {variant === 'icon' && Icon ? (
          <button
            onClick={() => setShowPopup(v => !v)}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/5"
            aria-label="Email"
          >
            <Icon size={20} />
          </button>
        ) : (
          <button
            onClick={() => setShowPopup(v => !v)}
            className="hover:text-white transition-colors text-sm font-medium"
          >
            Email
          </button>
        )}

        {showPopup && (
          <>
            {/* Dismiss overlay */}
            <div className="fixed inset-0 z-40" onClick={() => setShowPopup(false)} />

            <div
              className={`absolute z-50 bottom-14 bg-zinc-900 border border-white/10 rounded-2xl p-4 w-72 shadow-2xl ${
                align === 'left' ? 'left-0' : 'right-0'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Contact</span>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Email + copy */}
              <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-2.5 mb-3">
                <span className="text-white text-sm flex-1 truncate">
                  {resumeData.personalInfo.email}
                </span>
                <button
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copied
                    ? <Check size={14} className="text-green-400" />
                    : <Copy size={14} />
                  }
                </button>
              </div>

              {/* Say Hello shortcut */}
              <button
                onClick={() => { setShowPopup(false); setIsContactOpen(true); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
              >
                Say Hello <ArrowRight size={14} />
              </button>
            </div>
          </>
        )}
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};
