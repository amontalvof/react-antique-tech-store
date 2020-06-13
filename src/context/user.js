// user context

import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [logedin, setLogedin] = useState(false);
  const [registerin, setRegisterin] = useState({});
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginIsOpen(true);
    handleRegisterClose();
  };

  const handleLoginClose = () => {
    setLoginIsOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterIsOpen(true);
    handleLoginClose();
  };

  const handleRegisterClose = () => {
    setRegisterIsOpen(false);
  };

  const handleRegisterSubmit = (userr) => {
    //console.log("registro", userr);
    setRegisterin(userr);
  };

  const handleLoginSubmit = (userl) => {
    //console.log("login", userl);
    const { passwordlogin, emaillogin } = userl;
    const { passwordregistro, emailregistro } = registerin;

    if (passwordlogin === passwordregistro && emaillogin === emailregistro) {
      setLogedin(true);
    }
  };

  const handleCloseSession = () => {
    setLogedin(false);
  };

  return (
    <UserContext.Provider
      value={{
        logedin,
        registerin,
        loginIsOpen,
        registerIsOpen,
        handleLoginOpen,
        handleLoginClose,
        handleLoginSubmit,
        handleRegisterOpen,
        handleRegisterClose,
        handleRegisterSubmit,
        handleCloseSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
