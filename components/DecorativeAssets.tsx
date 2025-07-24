import React from 'react';

const Planet1 = ({ className }: {className?: string}) => <div className={`absolute w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 dark:opacity-30 blur-2xl animate-float ${className}`} style={{animationDuration: '8s'}} />;
const Planet2 = ({ className }: {className?: string}) => <div className={`absolute w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-500 rounded-full opacity-20 dark:opacity-30 blur-3xl animate-float ${className}`} style={{animationDuration: '12s', animationDelay: '-3s'}} />;
const Rocket = ({ className }: {className?: string}) => (
    <div className={`absolute transform -rotate-45 animate-float ${className}`} style={{animationDuration: '10s', animationDelay: '-1s'}}>
        <div className="w-12 h-12 text-2xl">🚀</div>
    </div>
);

export const DecorativeAssets = () => (
    <>
        <Planet1 className="top-1/4 -left-16" />
        <Planet2 className="top-0 -right-24" />
        <Rocket className="bottom-1/3 left-12" />
        <Planet1 className="bottom-1/4 -right-12" />
    </>
);
