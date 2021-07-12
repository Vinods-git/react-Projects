import React from 'react';

const UserContext = React.createContext('Karmenghe');

const Provider = UserContext.Provider;
const Consumer = UserContext.Consumer;

export { Provider, Consumer };

export default UserContext;
