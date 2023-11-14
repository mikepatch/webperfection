import cn from 'classnames';

import styles from './form.module.scss';
import { FormProps } from '@/types';
import Field from './Field';
import FieldLabel from './FieldLabel';
import Input from './Input';
import Textarea from './Textarea';
import SubmitButton from './SubmitButton';
import FieldError from './FieldError';
import Link from '../Link';

function Form({ title, onSubmit, onInputChange, fields, values, errors, ...props }: FormProps) {
    const renderFields = fields.map(
        ({ id, label, type, name, errorMessage, ...restAttributes }) => {
            const attributes = {
                id,
                label,
                type,
                name,
                value: values[name],
                onChange: onInputChange,
                ...restAttributes,
            };

            return (
                <Field key={id} className={styles.field}>
                    <FieldLabel id={id} className={styles.fieldLabel}>
                        {label}
                        {attributes.required && ' *'}
                    </FieldLabel>
                    {type === 'textarea' ? (
                        <Textarea className={styles.fieldTextarea} {...attributes} />
                    ) : (
                        <Input
                            className={cn(styles.fieldInput, errors[name] && styles.error)}
                            {...attributes}
                        />
                    )}
                    <FieldError className={cn(styles.fieldError, errors[name] && styles.visible)}>
                        {errors[name] || errorMessage}
                    </FieldError>
                </Field>
            );
        }
    );

    return (
        <form noValidate onSubmit={onSubmit} className={styles.form} {...props}>
            {title && <h4 className={styles.formTitle}>{title} </h4>}
            <div className={styles.body}>
                {renderFields}
                <small className={styles.regulations}>
                    <Link href="#" className={styles.regulationsLink}>
                        Regulamin i warunki współpracy
                    </Link>
                </small>
                <SubmitButton className={styles.submitButton}>Wyślij wiadomość</SubmitButton>
            </div>
        </form>
    );
}

export default Form;
