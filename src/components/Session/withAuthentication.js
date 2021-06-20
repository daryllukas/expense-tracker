import React, { useContext, useEffect, useState } from 'react';
import AuthUserContext from '../../context/Session';
import { AppwriteContext } from '../../components/Appwrite';

const withAuthentication = (Component) =>
  function WithAuthentication(props) {
    const [authUser, setAuthUser] = useState(null);
    const appwrite = useContext(AppwriteContext);

    useEffect(() => {
      appwrite
        .doGetCurrentUser()
        .then((user) => {
          setAuthUser(user);
        })
        .catch((err) => {
          setAuthUser(null);
        });
    }, [appwrite]);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

export default withAuthentication;
