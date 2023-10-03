import React from 'react';

import LinkedInIcon from '../../assets/icons/icon-linkedin.svg?react';
import FacebookIcon from '../../assets/icons/icon-facebook.svg?react';
import YoutubeIcon from '../../assets/icons/icon-youtube.svg?react';
import styles from './socialMediaBar.module.scss';

type SocialMediaBarProps = {
    color?: string;
};

type SocialMediaItem = {
    id: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    href: string;
};

export default function SocialMediaBar({ color = '#000' }: SocialMediaBarProps) {
    const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
        {
            id: 'linkedIn',
            Icon: LinkedInIcon,
            href: 'link',
        },
        {
            id: 'facebook',
            Icon: FacebookIcon,
            href: 'link',
        },
        {
            id: 'youtube',
            Icon: YoutubeIcon,
            href: 'link',
        },
    ];

    const renderSocialMediaItems = SOCIAL_MEDIA_ITEMS.map(({ id, Icon, href }: SocialMediaItem) => (
        <li key={id}>
            <a href={href}>
                <Icon style={{ fill: color }} />
            </a>
        </li>
    ));
    return <ul className={styles.socialMediaList}>{renderSocialMediaItems}</ul>;
}
