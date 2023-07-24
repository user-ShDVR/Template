import { FC } from 'react'
import cls from './Footer.module.scss'
import { classNames } from '../classNames/classNames';
import { ReactComponent as Logo } from '../../assets/mark.svg';
import { AppLink } from '../AppLink/AppLink';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
    return (
        <footer id='Footer' className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.Information}>
                <AppLink to={'/'} ><Logo className={cls.Mark} /></AppLink>
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
                        Break down information silos, streamline inefficient and <br />
                        error-prone PO processes, track incoming inventory in real-time, <br />
                        and gain deeper insights in order to achieve your operational and <br />
                        financial goals.
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
                    logo
                    <p className={cls.Copyright}>
                        Flaire Software, Inc.<br/>
                        Copyright 2023 © All rights reserved
                    </p>

                    <p className={cls.UndercardText}>
                        Designed by brandpack
                    </p>
                    <div className={cls.socials} >Linkedin</div>

                </div>
            </div>
        </footer>
    )
}