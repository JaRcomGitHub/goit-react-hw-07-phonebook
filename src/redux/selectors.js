
export const selectContactsState = store => store.phonebook.contacts;

export const selectContactsAll = store => store.phonebook.contacts.items;

export const selectFilter = store => store.phonebook.filter;

export const selectContactsFiltered = store => {
    const contacts = selectContactsAll(store);
    const filter = selectFilter(store);
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normolizedFilter)
    );
};