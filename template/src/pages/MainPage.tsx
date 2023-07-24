import { FC } from 'react'
import { classNames } from '../components/classNames/classNames';
import { Hero } from '../components/Hero/Hero';
import { Cards } from '../components/cards/Cards';
import { ReactComponent as HeroBgGradient } from '../assets/lights.svg';
import { Content } from '../components/Content/Content';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <main id='main' className={classNames("page-wrapper", {}, [className])}>
            
            <Hero />
            <HeroBgGradient className="gradient" />
            <Cards />
            <Content />
        </main>
    )
}