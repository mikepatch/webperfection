import LogoFull from '@src/assets/images/brand-logo-full.png';
import LogoMini from '@src/assets/images/brand-logo-mini.png';

type BrandLogoProps = {
    variant?: 'full' | 'mini';
    className?: string;
};

export default function BrandLogo({ variant = 'full', className }: BrandLogoProps) {
    const VARIANTS = {
        full: LogoFull,
        mini: LogoMini,
    };

    return <img src={VARIANTS[variant]} className={className} />;
}
