import { FC } from 'react'
import cls from './Menu.module.scss'
import { classNames } from '../classNames/classNames';
import { AppLink } from '../AppLink/AppLink';

interface MenuProps {
    className?: string;
    burger: boolean;
}
const HeaderLinks = [
    { id: 1, text: 'How it works', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Blog', link: '/blog' },
    { id: 4, text: 'Careers', link: '/careers' },
]

export const Menu: FC<MenuProps> = ({ className, burger }) => {
    return (
        <div className={classNames(cls.Menu, { [cls.collapsed]: burger }, [className])}>
            {HeaderLinks.map((l) => {
                return <AppLink className={cls.MenuLink} key={l.id} to={l.link} >{l.text}</AppLink>
            })}
        </div>
    )
}