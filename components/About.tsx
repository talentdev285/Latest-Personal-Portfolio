import React from 'react';
import { STATS_DATA, PERSONAL_INFO_DATA } from '../constants';
import { UiIcons } from './icons/UiIcons';

const StatBubble: React.FC<{ stat: typeof STATS_DATA[0], index: number }> = ({ stat, index }) => {
    const animationDelays = ['animation-delay-0', 'animation-delay-200', 'animation-delay-400', 'animation-delay-600'];
    return (
        <div className={`absolute w-44 h-44 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-2xl ${stat.color} transform hover:scale-110 transition-transform animate-float ${animationDelays[index]}`}>
            <span className="text-4xl md:text-5xl font-extrabold">{stat.value}</span>
            <span className="mt-1 font-semibold uppercase tracking-wider text-xs md:text-sm">{stat.label}</span>
        </div>
    );
};


const About: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 items-center">
            <div className="relative h-96 flex items-center justify-center -rotate-12">
                <div className="relative w-80 h-80">
                  <div className="absolute top-0 left-0">
                    <StatBubble stat={STATS_DATA[0]} index={0} />
                  </div>
                   <div className="absolute top-0 right-0">
                    <StatBubble stat={STATS_DATA[1]} index={1} />
                  </div>
                   <div className="absolute bottom-0 left-0">
                    <StatBubble stat={STATS_DATA[2]} index={2} />
                  </div>
                   <div className="absolute bottom-0 right-0">
                    <StatBubble stat={STATS_DATA[3]} index={3} />
                  </div>
                </div>
            </div>
            <div className="relative bg-white dark:bg-dark-surface p-6 rounded-lg shadow-xl border border-border-color dark:border-dark-border-color">
                <h3 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-6">
                    Personal Infos
                </h3>
                <div className="font-mono text-sm space-y-2">
                    {PERSONAL_INFO_DATA.map(info => (
                        <div key={info.label}>
                            <span className="text-purple-500">{info.label.toLowerCase()}</span>
                            <span className="text-gray-500">:</span>
                            <span className={`ml-2 ${info.color ? info.color : 'text-text-secondary dark:text-dark-text-secondary'}`}>'{info.value}'</span>
                            {info.comment && <span className="ml-4 text-gray-400 dark:text-gray-500">{info.comment}</span>}
                        </div>
                    ))}
                </div>
                <a href="#" className="mt-8 inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-focus transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Download CV <UiIcons.Download />
                </a>
            </div>
        </div>
    );
};

export default About;