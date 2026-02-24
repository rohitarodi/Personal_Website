import { useState } from 'react';
import { Copy, Check, X, ArrowRight } from 'lucide-react';
import { resumeData } from '../data/resume';
import { ContactModal } from './ContactModal';

export const Footer = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <footer className="bg-black text-zinc-500 py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
          </div>

          <div className="flex gap-6">
            {resumeData.personalInfo.social.map((item) => {
              if (item.name === 'Email') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      onClick={() => setShowEmailPopup(v => !v)}
                      className="hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </button>

                    {showEmailPopup && (
                      <>
                        {/* Dismiss overlay */}
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setShowEmailPopup(false)}
                        />
                        <div className="absolute bottom-8 right-0 z-50 bg-zinc-900 border border-white/10 rounded-2xl p-4 w-72 shadow-2xl">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Contact</span>
                            <button
                              onClick={() => setShowEmailPopup(false)}
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
                            onClick={() => { setShowEmailPopup(false); setIsContactOpen(true); }}
                            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors"
                          >
                            Say Hello <ArrowRight size={14} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};
