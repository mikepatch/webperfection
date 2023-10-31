import { FormField, MenuItem, TeamMember, Testimonial } from '../types';
import TeamImgFirst from '../assets/images/team-dev-1.png';
import TeamImgSecond from '../assets/images/team-dev-2.png';
import TeamImgThird from '../assets/images/team-dev-3.png';
import TestimonialImg from '../assets/images/testimonials-first.png';

export const MENU_ITEMS: MenuItem[] = [
    {
        id: 'aboutProject',
        label: 'O projekcie',
        href: '/',
    },
    { id: 'aboutUs', label: 'O nas', href: '/about' },
    { id: 'contact', label: 'Kontakt', href: '/contact' },
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
