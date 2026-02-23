import { motion } from 'motion/react';
import { Home, User, GraduationCap, Briefcase, Folder, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Education', icon: GraduationCap, href: '#education' },
  { name: 'Work', icon: Briefcase, href: '#experience' },
  { name: 'Projects', icon: Folder, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

export const Navbar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all relative group"
            aria-label={item.name}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5">
              {item.name}
            </span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
};
