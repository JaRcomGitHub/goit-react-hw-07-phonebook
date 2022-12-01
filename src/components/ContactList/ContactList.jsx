import { useDispatch, useSelector } from 'react-redux';
// import { delContact } from 'redux/phonebookSlice';
import { deleteContact } from 'redux/operations';
import { selectContactsItem, selectFilter } from 'redux/selectors';
import Contact from "./Contact";
import css from './ContactList.module.css'

export default function ContactList() {
    const contacts = useSelector(selectContactsItem);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const delContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };
    
    const getFilteredContacts = (name) => {
        const normolizedFilter = name.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter)
        );
    }

    const filteredContacts = getFilteredContacts(filter);

    return filteredContacts.length > 0 && (
        <div className={css.contactListBlock}>
            <ul>
                {filteredContacts.map(({ id, name, phone }) => (
                    <Contact
                        key={id}
                        name={name}
                        phone={phone}
                        onDeleteContact={() => delContact(id)}
                    /> 
                ))}
            </ul>
        </div>
    );
}
