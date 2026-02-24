import { resumeData } from '../data/resume';
import { EmailButton } from './EmailButton';

export const Footer = () => {
  return (
    <footer className="bg-black text-zinc-500 py-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm">
          © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
        </div>

        <div className="flex gap-6">
          {resumeData.personalInfo.social.map((item) => {
            if (item.name === 'Email') {
              return <EmailButton key={item.name} variant="text" align="right" />;
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
  );
};
