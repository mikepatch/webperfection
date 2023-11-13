import { SocialMediaBarProps, SocialMediaItem } from '@/types';
import { SOCIAL_MEDIA_ITEMS } from '@/constants';
import Icon from '../common/Icon';
import styles from './socialMediaBar.module.scss';

export default function SocialMediaBar({ color = '#000' }: SocialMediaBarProps) {
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
