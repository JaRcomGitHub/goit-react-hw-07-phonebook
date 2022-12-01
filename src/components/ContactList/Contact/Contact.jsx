import css from './Contact.module.css'
import PropTypes from 'prop-types';

export default function Contact({ name, phone, onDeleteContact }) {
    return (
        <li className={css.ContactListItem}>
            <p>{name}: </p>
            <p>{phone}</p>
            <button 
                type='button'
                onClick={onDeleteContact}
            >Delete</button>
        </li>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};