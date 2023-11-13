import { useEffect, useState } from 'react';

import styles from './contactForm.module.scss';
import { FormState } from '@/types';
import { FORM_ATTRIBUTES, FORM_FIELDS, FORM_POPUP } from '@/constants';
import { useForm } from '@/hooks/useForm';
import Popup from '@/components/common/Popup';
import Form from '@/components/common/Form';

export default function ContactForm() {
    const initialValues: FormState = {
        fullName: '',
        email: '',
        budget: '',
        message: '',
    };
    const { values, serverResponse, errors, handleChange, handleSubmit } = useForm(
        initialValues,
        FORM_FIELDS
    );
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsPopupOpen(serverResponse.error || serverResponse.success);
    }, [serverResponse]);

    const renderPopup = () => {
        switch (serverResponse.error || serverResponse.success) {
            case serverResponse.error:
                return <Popup {...FORM_POPUP.error} closePopup={() => setIsPopupOpen(false)} />;
            case serverResponse.success:
                return <Popup {...FORM_POPUP.success} closePopup={() => setIsPopupOpen(false)} />;
            default:
                return null;
        }
    };

    return (
        <section id="contactFormSection" className={styles.contactFormWrapper}>
            <Form
                onSubmit={(e) => handleSubmit(e)}
                values={values}
                errors={errors}
                onInputChange={handleChange}
                {...FORM_ATTRIBUTES}
            />
            {isPopupOpen && renderPopup()}
            <h3 className={styles.bottomTitle}>Razem stworzymy Twoją aplikację</h3>
        </section>
    );
}
