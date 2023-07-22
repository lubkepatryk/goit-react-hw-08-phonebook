export const selectContacts = state => {
    return state.contacts.items;
  };
  
  export const selectFilter = state => {
    return state.filter;
  };

  export const selectError = state => {
    return state.contacts.error;
  }

  export const selectLoading = state => {
    return state.contacts.isLoading;
  }