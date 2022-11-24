import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useApolloClient } from '@apollo/client';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useSearchParam } from 'react-use';
import LoadingLayout from 'components/Layouts/LoadingLayout';
import useTranslation from 'hooks/useTranslation';
import { TUser } from 'types/user';
import { LOGIN_REDIRECT_ROUTE } from 'constants/index';
import { AFTER_LOGIN_ROUTE, SIGNOUT_ROUTE } from 'constants/routes';
import { UserDocument, useUserQuery } from 'generated/graphql';

type TUserContextProvider = {
  user: TUser;
  isLoggedIn: boolean;
  isLoading: boolean;
  isPro: boolean;
  setUser: (user: TUser) => void;
  login: (credentials: any) => Promise<void>; // TODO: define credentials type
  logout: () => Promise<void>;
  redirectAfterLogin: () => void;
};

const UserContext = createContext({} as TUserContextProvider);

const UserContextProvider: React.FC<any> = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<TUser>(null);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const redirectUrl = useSearchParam('redirect');

  const client = useApolloClient();

  const getProfile = async () => {
    try {
      console.log(client.query);

      const { data } = await client.query({
        query: UserDocument,
        fetchPolicy: 'network-only',
      });

      setUser((newUser: any) =>
        newUser ? { ...newUser, ...data?.profile } : { ...newUser?.profile }
      );

      setLoading(() => false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getCurrentUser = async (): Promise<TUser> => {
    try {
      const user = null;

      if (user == null) {
        return null;
      }

      const { username } = user;

      return {
        id: username,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const redirectAfterLogin = () => {
    const redirectRoute =
      sessionStorage.getItem(LOGIN_REDIRECT_ROUTE) || redirectUrl;
    sessionStorage.removeItem(LOGIN_REDIRECT_ROUTE);
    navigate(redirectRoute || AFTER_LOGIN_ROUTE);
  };

  const { data: userData } = useUserQuery({
    fetchPolicy: 'cache-only',
  });

  useEffect(() => {
    if (userData) {
      setUser({ ...user, ...userData });
    }
  }, [userData]);

  const init = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      setUser(user);
      await getProfile();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

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

  const login = async (credentials: any) => {
    try {
      // cognitoUserRef.current = await Auth.signIn(credentials.email);
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await register(credentials);
    }
  };

  const register = async (credentials: any) => {
    try {
      await login(credentials);
    } catch (error) {
      console.error(error);
    }
  };

  if (user == null && isLoading) {
    return <LoadingLayout />;
  }

  const isPro = () => Boolean(user && user.pro);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        isLoading,
        setUser,
        login,
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
