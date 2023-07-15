import { FC, useState } from 'react'
import cls from './Header.module.scss'
import { Button, ThemeButton } from '../Button/Button'
import { Menu } from './Menu'
import { classNames } from '../classNames/classNames'


export const Header: FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <header className={cls.headerContainer}>
            <div className={cls.Header}>
                <h1 className={cls.Logo}>LOGO</h1>
                <Menu burger={collapsed} />
                <div className={cls.HeaderBtn}>
                    <Button theme={ThemeButton.CLEAR} >Login</Button>
                    <Button theme={ThemeButton.PRIMARY} >Sign up</Button>
                    <div
                        onClick={() => setCollapsed(!collapsed)}
                        className={classNames(cls.burger, { [cls.open]: collapsed }, [])}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </header>
    )
}