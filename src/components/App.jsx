import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContactsState } from "redux/selectors";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter"

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContactsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
