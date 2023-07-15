import { FC } from 'react'
import { classNames } from '../components/classNames/classNames';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <div id='main' className={classNames("page-wrapper", {}, [className])}>
            
            <main>
                123
            </main>

        </div>
    )
}