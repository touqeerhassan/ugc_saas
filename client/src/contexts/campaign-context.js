import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import firebase from "../lib/firebase";
import { useAuth } from "../hooks/use-auth";

const initialState = {
  isInitialized: false,
  campaign: null,
};

const reducer = (state, action) => {
  //   if (action.type === "AUTH_STATE_CHANGED") {
  //     const { isAuthenticated, user } = action.payload;

  //     return {
  //       ...state,
  //       isAuthenticated,
  //       isInitialized: true,
  //       user,
  //     };
  //   }

  return state;
};

export const AuthContext = createContext({
  ...initialState,
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth?.user) {
        const campaign = 
    }
  }, [dispatch, auth?.user, initialState]);

  const signInWithEmailAndPassword = (email, password) => {
    console.log("signInWithEmailAndPassword");
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(provider);
  };

  const createUserWithEmailAndPassword = async (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: "Firebase",
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
