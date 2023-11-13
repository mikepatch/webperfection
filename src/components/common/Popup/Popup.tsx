import { useRef } from 'react';

import styles from './popup.module.scss';
import Button from '../Button';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { PopupProps } from '@/types';

export default function Popup({
    title,
    emoji,
    text,
    buttonText = 'Zamknij',
    closePopup,
}: PopupProps) {
    const node = useRef<HTMLElement>(null);
    useOnClickOutside(node, closePopup);

    return (
        <aside className={styles.wrapper}>
            <section ref={node} className={styles.body}>
                <header className={styles.header}>
                    {emoji && <span className={styles.emoji}>{emoji}</span>}
                    {title && <h2 className={styles.title}>{title}</h2>}
                </header>
                <p>{text}</p>
                <Button onClick={closePopup} className={styles.button}>
                    {buttonText}
                </Button>
            </section>
        </aside>
    );
}
