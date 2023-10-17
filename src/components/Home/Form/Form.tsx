import cn from 'classnames';

import styles from './form.module.scss';
import Button from '../../common/Button';
import { FORM_FIELDS } from '../../constants';
import { useForm } from '../../../hooks/useForm';

export default function Form() {
    const initialValues = {
        fullName: '',
        email: '',
        budget: '',
        message: '',
    };
    const { values, errors, handleChange, handleSubmit } = useForm(initialValues, FORM_FIELDS);

    const onSubmit = () => {
        console.log('submitted with values: ', values);
    };

    return (
        <section className={styles.wrapper}>
            <form onSubmit={(e) => handleSubmit(e, onSubmit)} noValidate className={styles.form}>
                <h3 className={styles.formTitle}>
                    Wypełnij formularz i dowiedz się, jak możemy Ci pomóc.
                </h3>
                <section className={styles.body}>
                    {FORM_FIELDS.map((field) => {
                        return (
                            <p key={field.id} className={styles.field}>
                                <label htmlFor={field.id} className={styles.fieldLabel}>
                                    {field.label} {field.required && '*'}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.id}
                                        name={field.name}
                                        required={field.required}
                                        aria-required={field.required}
                                        placeholder={field.placeholder}
                                        rows={4}
                                        className={styles.fieldTextarea}
                                        value={values[field.name]}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.name}
                                        required={field.required}
                                        aria-required={field.required}
                                        placeholder={field.placeholder}
                                        pattern={field.pattern}
                                        className={cn(
                                            styles.fieldInput,
                                            errors[field.name] && styles.error
                                        )}
                                        value={values[field.name]}
                                        onChange={handleChange}
                                    />
                                )}
                                <span
                                    className={cn(
                                        styles.fieldError,
                                        errors[field.name] && styles.visible
                                    )}
                                >
                                    {errors[field.name] || field.errorMessage}
                                </span>
                            </p>
                        );
                    })}
                    <small className={styles.regulations}>
                        <a href="#" className={styles.regulationsLink}>
                            Regulamin i warunki współpracy
                        </a>
                    </small>
                    <Button type="submit" className={styles.submitButton}>
                        Wyślij wiadomość
                    </Button>
                </section>
            </form>
            <h3 className={styles.bottomTitle}>Razem stworzymy Twoją aplikację</h3>
        </section>
    );
}
