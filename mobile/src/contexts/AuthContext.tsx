import { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signin: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signin() {}

  return (
    <AuthContext.Provider
      value={{
        signin,
        user: {
          name: "Daniel",
          avatarUrl: "https://github.com/Daniel-Conte.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
