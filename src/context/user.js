// user context

import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [logedin, setLogedin] = useState(false);
  const [registerin, setRegisterin] = useState({});
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  useEffect(() => {}, []);

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
    setLogedin({ log: false, reg: true });
    setRegisterin(userr);
  };

  const handleLoginSubmit = () => {
    setLogedin(true);
  };

  const handleCloseSession = () => {
    setLogedin(false);
  };

  //console.log(logedinMsg);

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
