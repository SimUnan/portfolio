import React from "react";

import SectionTitle from "../SectionTitle";

import HeroImg from "../../assets/image/hero.jpg";
import Me from "../../assets/image/me.gif";

const AboutMe = () => {
    return (
        <div>
        <SectionTitle>About Me</SectionTitle>
        <div className="flex flex-col md:flex-row gap-5">
            <div>
                <p className='pb-3 dark:text-slate-200 text-slate-900 text-normal md:text-lg font-normal'>
                Im Sim Unan, recently studying at RUPP and also a Web developer that using MERN stack and like research for new stuff. Also im looking to land a on-site or remote as a web front-end developer position for your company.
                </p>
                <a className="blog text-slate-900 dark:text-slate-200 underline pb-4 cursor-pointer" href="mailto:Simunan002@gmail.com">Simunan002@gmail.com</a>
            </div>
            <img 
                src={Me} 
                alt="Me" 
                className="md:w-6/12 object-cover rounded-xl"
            />
        </div>
        </div>
    );
};

export default AboutMe;
