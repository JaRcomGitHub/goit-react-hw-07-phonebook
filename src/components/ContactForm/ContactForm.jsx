import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { selectContactsAll } from "redux/selectors";
import css from './ContactForm.module.css'

export default function ContactForm() {
    const [name, setName] = useState('');//'Name Names'
    const [phone, setPhone] = useState('');//'123-456-789'
    const contacts = useSelector(selectContactsAll);
    const dispatch = useDispatch();
  
    const checkContact = (name) => {
        const normolizedName = name.toLowerCase();

        return contacts.some(contact =>
            contact.name.toLowerCase().includes(normolizedName)
        );
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (checkContact(name)) {
            window.alert(`${name} is already in contacts.`);
            return;
        }
        
        dispatch(addContact({ name, phone }));
        reset();
    }

    const reset = () => {
        setName('');
        setPhone('');
    }
        
    const handleInputChangeName = event => {
        setName(event.currentTarget.value);
    }

    const handleInputChangeNumber = event => {
        setPhone(event.currentTarget.value);
    }

    return (
        <form className={css.сontactForm} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChangeName}
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={phone}
                    onChange={handleInputChangeNumber}
                />
            </label>
            <button type='submit'>Add contact</button>
        </form>
    );
}
