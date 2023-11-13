import { IconProps } from '@/types';
import Sprites from '@/assets/icons/sprites.svg';

export default function Icon({ id, ...props }: IconProps) {
    return (
        <svg {...props}>
            <use href={`${Sprites}#${id}`} />
        </svg>
    );
}
