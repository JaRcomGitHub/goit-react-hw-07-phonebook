import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";


export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(store => store.phonebook.contacts);

  useEffect(() => {
    dispatch(fetchTasks());
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

//<p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>