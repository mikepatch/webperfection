import { FormField, MenuItem, SocialMediaItem, TeamMember, Testimonial } from '../types';
import TeamImgFirst from '../assets/images/team-dev-1.png';
import TeamImgSecond from '../assets/images/team-dev-2.png';
import TeamImgThird from '../assets/images/team-dev-3.png';
import TestimonialImg from '../assets/images/testimonials-first.png';

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'aboutProject',
        label: 'O projekcie',
        href: 'descriptionSection',
    },
    { id: 'aboutUs', label: 'O nas', href: 'summarySection' },
    { id: 'contact', label: 'Kontakt', href: 'contactFormSection' },
];

export const OFFER_ITEMS = [
    {
        id: 1,
        title: 'Transparentność umowy',
        iconId: 'icon-chat',
        description:
            'U nas nie musisz martwić się o koszty i negocjacje. Gramy w otwarte karty i przedstawiamy jasne warunki współpracy. Wspólnie zdecydujemy, jak najlepiej zrealizować Twój projekt przy maksymalnej transparentności.',
    },
    {
        id: 2,
        title: 'Minimalne  koszty dla Ciebie',
        iconId: 'icon-pay',
        description:
            'Dzięki wykorzystaniu zespołu juniorów i nadzoru Seniora, możemy zrealizować Twój projekt z minimalnym nakładem finansowym.',
    },
    {
        id: 3,
        title: 'Doświadczenie dla juniorów',
        iconId: 'icon-computer',
        description:
            'Zespoły składające się z absolwentów mentoringu Devmentor.pl to pasjonaci IT, którzy chcą zdobyć praktyczne doświadczenie w branży. Dzięki nam, Twoja aplikacja zostanie zrealizowana przez ludzi, którzy chcą się rozwijać w swoim zawodzie.',
    },
];

export const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
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

export const FORM_FIELDS: FormField[] = [
    {
        id: 'fullName',
        name: 'fullName',
        label: 'Imię i nazwisko',
        placeholder: 'Jan Kowalski',
        pattern: `^[a-zA-Z\s]`,
        type: 'text',
        required: true,
        errorMessage: 'Wpisz poprawne imię i nazwisko.',
    },
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'jan.kowalski@example.com',
        pattern: `^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$`,
        type: 'email',
        required: true,
        errorMessage: 'Wpisz poprawny adres email.',
    },
    {
        id: 'budget',
        name: 'budget',
        label: 'Szacowany budżet',
        placeholder: '5000 PLN',
        pattern: `^[0-9]`,
        type: 'text',
        required: true,
        errorMessage: 'Wpisz poprawną wartość.',
    },
    {
        id: 'message',
        name: 'message',
        label: 'Twoja wiadomość',
        placeholder: 'Zależy mi na utworzeniu strony e-commerce. Chcę uzyskać więcej informacji...',
        pattern: '',
        type: 'textarea',
        required: false,
        errorMessage: '',
    },
];

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;

export const FORM_ATTRIBUTES = {
    title: 'Wypełnij formularz i dowiedz się, jak możemy Ci pomóc.',
    action: WEBHOOK_URL,
    method: 'POST',
    fields: FORM_FIELDS,
};

export const TEAM_MEMBERS: TeamMember[] = [
    { id: 'team-member-1', role: 'Senior Back-end Developer', imgSrc: TeamImgFirst },
    { id: 'team-member-2', role: 'Senior Front-end Developer', imgSrc: TeamImgSecond },
    { id: 'team-member-3', role: 'Senior Fullstack Developer', imgSrc: TeamImgThird },
    { id: 'team-member-4', role: 'Senior Fullstack Developer', imgSrc: TeamImgThird },
    { id: 'team-member-5', role: 'Senior Fullstack Developer', imgSrc: TeamImgThird },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 0,
        author: 'Regina Miles',
        role: 'Designer',
        rating: 4,
        comment:
            'This proved to be impossible using concepts of space and time. Einstein new view of time first and then',
        imgSrc: TestimonialImg,
    },
    {
        id: 1,
        author: 'Regina Miles',
        role: 'Designer',
        rating: 4,
        comment:
            'This proved to be impossible using concepts of space and time. Einstein new view of time first and then',
        imgSrc: TestimonialImg,
    },
    {
        id: 2,
        author: 'Regina Miles',
        role: 'Designer',
        rating: 2,
        comment:
            'This proved to be impossible using concepts of space and time. Einstein new view of time first and then',
        imgSrc: TestimonialImg,
    },
    {
        id: 3,
        author: 'Regina Miles',
        role: 'Designer',
        rating: 5,
        comment:
            'This proved to be impossible using concepts of space and time. Einstein new view of time first and then',
        imgSrc: TestimonialImg,
    },
];

export const FORM_POPUP = {
    error: {
        title: 'Coś poszło nie tak...',
        emoji: '🙁',
        text: 'Spróbuj jeszcze raz.',
    },
    success: {
        title: 'Dziękujemy za kontakt!',
        emoji: '🥳',
        text: 'Wkrótce otrzymasz odpowiedź',
    },
};
