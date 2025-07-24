import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Section from './components/Section';
import { DecorativeAssets } from './components/DecorativeAssets';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="font-sans antialiased relative overflow-x-hidden">
            <DecorativeAssets />
            
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            
            <main>
                <Hero />
                <Section id="about" title="ABOUT ME">
                    <About />
                </Section>
                <Section id="skills" title="MY SKILLS">
                    <Skills />
                </Section>
                <Section id="projects" title="MY EXPERIENCE">
                    <Projects />
                </Section>
                <Section id="contact" title="GET IN TOUCH">
                    <Contact />
                </Section>
            </main>

            <Footer />
        </div>
    );
};

export default App;