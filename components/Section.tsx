import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({ id, title, children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useScrollAnimation(ref);

    return (
        <section id={id} ref={ref} className={`relative py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
                <h2 className="text-8xl md:text-9xl font-black text-gray-200/50 dark:text-gray-500/10 opacity-50 select-none whitespace-nowrap">{title}</h2>
            </div>
            <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
