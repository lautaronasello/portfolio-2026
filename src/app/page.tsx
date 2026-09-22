import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { AIProjects } from '@/components/AIProjects';
import { AboutMe } from '@/components/AboutMe';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Contact } from '../components/Contact';
import { Capabilities } from '../components/Capabilities';

export default function Home() {
  return (
    <ThemeProvider>
      <main className='min-h-screen selection:bg-(--accent-light) selection:text-(--accent)'>
        <Header />
        <Hero />
        <Projects />
        <AIProjects />
        <Capabilities />
        <AboutMe />
        <Contact />
        {/* Footer Minimalista */}
        <footer
          id='contacto'
          className='border-t border-(--border-color) py-12 text-center text-xs text-(--text-muted)'
        >
          <p>
            © {new Date().getFullYear()} — Diseñado y desarrollado por Lautaro
            Nasello utilizando Next.js & Tailwind CSS con ayuda de IA .
          </p>
        </footer>
      </main>
    </ThemeProvider>
  );
}
