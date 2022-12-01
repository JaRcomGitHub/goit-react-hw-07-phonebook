import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContactsFiltered } from 'redux/selectors';
import Contact from "./Contact";
import css from './ContactList.module.css'

export default function ContactList() {
    const contacts = useSelector(selectContactsFiltered);
    const dispatch = useDispatch();

    return contacts.length > 0 && (
        <div className={css.contactListBlock}>
            <ul>
                {contacts.map(({ id, name, phone }) => (
                    <Contact
                        key={id}
                        name={name}
                        phone={phone}
                        onDeleteContact={() => dispatch(deleteContact(id))}
                    /> 
                ))}
            </ul>
        </div>
    );
}
