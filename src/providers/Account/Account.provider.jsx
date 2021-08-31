import React, { createContext, useContext, useEffect, useReducer } from "react";
import { storage } from "../../utils/fns";
import { AccountFns } from "../contextHandlers";
import accountReducer, { initialAccount } from "./accountReducer";

const AccountContext = createContext(null);

function useAccount() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error(`Can't use "useAccount" without an AccountProvider!`);
  }
  return context;
}

function AccountProvider({ children }) {
  const [accountCtx, dispatch] = useReducer(accountReducer, initialAccount);

  useEffect(() => {
    storage.set('account', accountCtx);
  }, [accountCtx]);

  return (
    <AccountContext.Provider value={{ accountCtx, AccountFns: AccountFns(dispatch) }}>
      {children}
    </AccountContext.Provider>
  );
}

const notInitial = {
  loginFailed: true,
  modal: false,
  authenticated: true,
  user: 'wizeline',
  name: 'Wizeline',
  userAvatar: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favorites: {
    wizeline: {
      HYyRZiwBWc8: {
        description: "Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...",
        id: "HYyRZiwBWc8",
        thumbnail: "https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg",
        title: "Wizeline Guadalajara | Bringing Silicon Valley to Mexico"
      }
    }
  }
}

function MockAccProvider({ children }) {
  const [accountCtx, dispatch] = useReducer(accountReducer, notInitial);

  useEffect(() => {
    storage.set('account', accountCtx);
  }, [accountCtx]);

  return (
    <AccountContext.Provider value={{ accountCtx, AccountFns: AccountFns(dispatch) }}>
      {children}
    </AccountContext.Provider>
  );
}

const notInitial2 = {
  loginFailed: true,
  modal: false,
  authenticated: true,
  user: 'wizeline',
  name: 'Wizeline',
  userAvatar: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  favorites: {
    wizeline: {}
  }
}

function MockAccProvider2({ children }) {
  const [accountCtx, dispatch] = useReducer(accountReducer, notInitial2);

  useEffect(() => {
    storage.set('account', accountCtx);
  }, [accountCtx]);

  return (
    <AccountContext.Provider value={{ accountCtx, AccountFns: AccountFns(dispatch) }}>
      {children}
    </AccountContext.Provider>
  );
}

export { useAccount, MockAccProvider, MockAccProvider2 };
export default AccountProvider;
