import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApolloClient } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import useTranslation from 'hooks/useTranslation';
import { TUser } from 'types/user';
import { AFTER_LOGIN_ROUTE, SIGNOUT_ROUTE } from 'constants/routes';

type TUserContextProvider = {
  user: TUser;
  isLoggedIn: boolean;
  isPro: boolean;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  logout: () => Promise<void>;
  redirectAfterLogin: () => void;
};

const UserContext = createContext({} as TUserContextProvider);

const UserContextProvider: React.FC<any> = (props) => {
  const [user, setUser] = useState<TUser>(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const client = useApolloClient();

  const redirectAfterLogin = () => {
    navigate(AFTER_LOGIN_ROUTE);
  };

  const init = () => {};

  useEffect(init, []);

  const logout: () => Promise<void> = async () => {
    try {
      setUser(null);

      navigate(SIGNOUT_ROUTE);
      await client.resetStore();
    } catch (error) {
      console.error(error);
      enqueueSnackbar(t({ defaultMessage: 'logout.error' }), {
        variant: 'error',
      });
    }
  };

  const isPro = () => Boolean(user && user.pro);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        setUser,
        logout,
        redirectAfterLogin,
        isPro: isPro(),
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContext, UserContextProvider, useUserContext };
