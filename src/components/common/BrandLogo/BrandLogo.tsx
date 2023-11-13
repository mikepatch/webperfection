import { BrandLogoProps } from '@/types';
import LogoFull from '@/assets/images/brand-logo-full.png';
import LogoMini from '@/assets/images/brand-logo-mini.png';

export default function BrandLogo({ variant = 'full', className }: BrandLogoProps) {
    const VARIANTS = {
        full: LogoFull,
        mini: LogoMini,
    };

    return <img src={VARIANTS[variant]} className={className} />;
}
