import { ComponentPropsWithoutRef } from 'react';
import Sprites from '../../assets/icons/sprites.svg';

interface IconProps extends ComponentPropsWithoutRef<'svg'> {
    id: string;
}

export default function Icon({ id, ...props }: IconProps) {
    return (
        <svg {...props}>
            <use href={`${Sprites}#${id}`} />
        </svg>
    );
}
