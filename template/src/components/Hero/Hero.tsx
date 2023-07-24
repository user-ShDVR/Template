import { FC } from 'react'
import cls from './Hero.module.scss'
import { classNames } from '../classNames/classNames';
import HeroBgImg from '../../assets/Test.jpg';
import { Button, ThemeButton } from '../Button/Button';
import { ReactComponent as Safari } from '../../assets/dashbord-safari.svg';



interface HeroProps {
    className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <div className={cls.HeroInformation}>
                <div className={cls.HeroText}>
                    <h1>Centralize
                        Streamline
                        Scale</h1>
                    <p>The fashion industry’s most intelligent and <br />
                        intuitive workflow platform, helping brands and <br />
                        retailers grow efficiently and profitably.
                    </p>
                </div>
                <Button theme={ThemeButton.PRIMARY} >GET STARTED</Button>
            </div>
            <img className={cls.img} src={HeroBgImg} alt="HeroBgImg" />
            <Safari className={cls.Safari}/>

        </div>
    )
}