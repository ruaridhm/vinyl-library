import { createContext } from 'react';

type authContextType = {
  loadUser: () => Promise<void>;
  register: (formData: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  login: (formData: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  clearErrors: () => void;

  error: any | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  // user: { name: string; id: string } | null;
  user;
  token: string;
};

const authContext = createContext<authContextType>(undefined!); //TODO A more robust type is possible

export default authContext;
