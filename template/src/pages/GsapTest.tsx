import { FC, useEffect, useRef } from 'react'
import { classNames } from '../components/classNames/classNames';
import { ReactComponent as HeroImg } from '../assets/hero-img.svg';
import { AppLink } from '../components/AppLink/AppLink';
import cls from './Hero.module.scss'
import { gsap } from 'gsap';

interface MainPageProps {
    className?: string;
}

export const GsapTest: FC<MainPageProps> = ({ className }) => {
    let tl = gsap.timeline();
    let text1 = useRef(null);
    let text2 = useRef(null);
    let text3 = useRef(null);    
    let text4 = useRef(null);
    let text5 = useRef(null);
    let text6 = useRef(null);
    let img = useRef(null);
    useEffect(() => {
        tl.fromTo([text1.current, text2.current, text3.current], {
            opacity: 0,
            y: 100,

        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
                amount: .4
            },

        }, 0)
        tl.fromTo(img.current, {
            opacity: 0,

        }, {
            opacity: 1,
            duration: 1
        }, 0)

    }, [])
    return (
        <>
            <main id='main' className={classNames("page-wrapper", {}, [className])}>
                <div className={classNames(cls.Hero, {}, [className])}>
                    <div className={cls.HeroInformation}>
                        <div className={cls.HeroText} >
                            <h1 ref={text1}>Optimize your supply chain </h1>
                            <p ref={text2}>The most intuitive platform for growing fashion<br />
                                and apparel brands to manage their core<br />
                                operations in a single place
                            </p>
                        </div>
                        <span ref={text3}><AppLink to={'/'}>Get Started</AppLink></span>
                    </div>
                    <span ref={img} >
                        <HeroImg className={cls.img} />
                    </span>

                </div>
            </main>
            <main id='main' className={classNames("page-wrapper", {}, [className])}>
                <div className={classNames(cls.Hero, {}, [className])}>
                    <div className={cls.HeroInformation}>
                        <div className={cls.HeroText} >
                            <h1 ref={text4}>Optimize your supply chain </h1>
                            <p ref={text5}>The most intuitive platform for growing fashion<br />
                                and apparel brands to manage their core<br />
                                operations in a single place
                            </p>
                        </div>
                        <span ref={text6}><AppLink to={'/'}>Get Started</AppLink></span>
                    </div>
                    

                </div>
            </main>
        </>
    )
}