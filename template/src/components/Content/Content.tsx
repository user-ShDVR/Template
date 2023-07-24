import { FC } from 'react'
import cls from './Content.module.scss'
import { ReactComponent as ContentImg } from '../../assets/group-47484.svg';
import { classNames } from '../classNames/classNames';

interface ContentProps {
    className?: string;
}

export const Content: FC<ContentProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Content, {}, [className])}>
            <div className={cls.ContentText}>
                <h1>
                    Gain real-time visibility <br />
                    into every step of your <br />
                    supply chain
                </h1>
                <p>
                    Easily manage products, orders and POs in a single <br />
                    system — no more shuffling between emails, <br />
                    spreadsheets, and other disjointed tools.
                </p>
                <p>
                    Track important milestones in real-time, get notified about <br />
                    changes or potential delays, ensure all relevant parties are kept <br />
                    up-to-date, and use activity streams for accountability,
                </p>
            </div>
            <ContentImg />
        </div>
    )
}