import { FC } from 'react'
import cls from './Menu.module.scss'
import { classNames } from '../classNames/classNames';
import { AppLink } from '../AppLink/AppLink';

interface MenuProps {
    className?: string;
    burger: boolean;
}
const HeaderLinks = [
    { id: 1, text: 'Blog', link: '/' },
    { id: 2, text: 'About', link: '/#Footer' },
    { id: 3, text: 'Careers', link: '/saSSASA' },
    { id: 4, text: 'Contact', link: '/#main' },
]

export const Menu: FC<MenuProps> = ({ className, burger }) => {
    return (
        <div className={classNames(cls.Menu, { [cls.collapsed]: burger }, [className])}>
            {HeaderLinks.map((l) => {
                return <AppLink key={l.id} to={l.link} >{l.text}</AppLink>
            })}
        </div>
    )
}