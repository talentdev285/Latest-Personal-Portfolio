import React from "react";
import { UiIcons } from "./icons/UiIcons";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-48 sm:pb-32">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-dark-background [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#63e_100%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <span className="inline-block bg-accent-pink text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Welcome to my Portfolio
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-black text-text-primary dark:text-dark-text-primary leading-tight">
            Hi! I'm Murshida K. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Full-Stack
            </span>
            &nbsp; Developer
          </h1>
          <p className="mt-6 max-w-lg text-lg text-text-secondary dark:text-dark-text-secondary">
            I'm a full-stack web developer and I work remotely from Bangladesh
            for clients in the World.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-focus transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Let's Connect <UiIcons.ArrowRight />
            </a>
          </div>
        </div>
        <div className="relative h-[500px] flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQF1lBbNb2znGA/profile-displayphoto-shrink_800_800/B56ZZCBw76GsAc-/0/1744864481805?e=1756339200&v=beta&t=0bNIhbd0l_k0pGoGqPH3QBlB_7EfWIbPfYLG-GJ7a9U"
            alt="Murshida K"
            className="absolute bottom-0 h-full w-auto object-contain z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
