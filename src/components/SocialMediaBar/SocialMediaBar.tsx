import Icon from '../common/Icon';
import styles from './socialMediaBar.module.scss';


type SocialMediaBarProps = {
    color?: string;
};

type SocialMediaItem = {
    id: string;
    iconId: string;
    href: string;
};

export default function SocialMediaBar({ color = '#000' }: SocialMediaBarProps) {
    const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
        {
            id: 'linkedIn',
            iconId: 'icon-linkedin',
            href: 'link',
        },
        {
            id: 'facebook',
            iconId: 'icon-facebook',
            href: 'link',
        },
        {
            id: 'youtube',
            iconId: 'icon-youtube',
            href: 'link',
        },
    ];

    const renderSocialMediaItems = SOCIAL_MEDIA_ITEMS.map(
        ({ id, iconId, href }: SocialMediaItem) => (
            <li key={id} className={styles.socialMediaItem}>
                <a href={href}>
                    <Icon id={iconId} style={{ fill: color }} />
                </a>
            </li>
        )
    );
    return <ul className={styles.socialMediaList}>{renderSocialMediaItems}</ul>;
}
