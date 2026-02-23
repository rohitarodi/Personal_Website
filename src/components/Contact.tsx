import { useState } from 'react';
import { FadeIn } from './Animations';
import { ArrowRight } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-32 bg-black text-white px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
              Let's build something<br />extraordinary.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance projects and open to full-time opportunities.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-105 transition-transform duration-300"
            >
              Say Hello
              <ArrowRight size={20} />
            </button>
          </FadeIn>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
