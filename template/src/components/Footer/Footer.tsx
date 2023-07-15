import { FC } from 'react'
import cls from './Footer.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Logo } from '../../assets/image.svg';
import { AppLink } from '../AppLink/AppLink';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer id='Footer' className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.Information}>
                <AppLink to={'/'} ><Logo /></AppLink>
                <div className={cls.LinksContainer}>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Product</h1>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/'}>Login</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Company</h1>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/'}>Login</AppLink>
                    </div>
                    <div className={cls.Links}>
                        <h1 className={cls.LinkHeader}>Contact</h1>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/'}>Login</AppLink>
                        <AppLink to={'/'}>Login</AppLink>
                    </div>
                </div>
            </div>
            <div className={cls.Undercard}>
                <div className={cls.row}>
                    <p className={cls.UndercardTextFirst}>
                        Buying electronic components<br />
                        shouldn’t be difficult. Regain<br />
                        control of your electronics supply chain
                    </p>
                    <div className={cls.col}>
                        <div className={cls.LogosText}>
                            Backed by
                        </div>
                        <div className={cls.Logo}>
                            Fractal
                            Bienville
                        </div>
                    </div>
                </div>
                <hr />
                <div className={cls.row}>
                    <p className={cls.Copyright}>
                        Breadboard Software, Inc.<br />
                        Copyright 2022 © All rights reserved<br />
                    </p>

                    <p className={cls.UndercardText}>
                        Designed and built in NYC
                    </p>
                    <div className={cls.socials} >Linkedin</div>

                </div>
            </div>
        </footer>
    )
}