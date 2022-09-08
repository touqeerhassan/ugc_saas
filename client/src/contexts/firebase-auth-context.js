import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import firebase from "../lib/firebase";
import { API_SERVICE } from "../config";
import { useRouter } from "next/router";

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === "AUTH_STATE_CHANGED") {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

export const AuthContext = createContext({
  ...initialState,
  platform: "Firebase",
  createUserWithEmailAndPassword: () => Promise.resolve(),
  signInWithEmailAndPassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const router = useRouter();
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async (user) => {
        console.log(user);
        if (user) {
          console.log(user);
          // Here you should extract the complete user profile to make it available in your entire app.
          // The auth state only provides basic information.
          try {
            if (sessionStorage.getItem("name") !== null) {
              await firebase
                .auth()
                .currentUser.updateProfile({
                  displayName: sessionStorage.getItem("name"),
                })
                .then(() => {
                  console.log(`Profile updated!`, firebase.auth().currentUser);
                })
                .catch((error) => {
                  console.log(error);
                });
            }

            const response = await fetch(`${API_SERVICE}/add_user`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: firebase.auth().currentUser?.displayName,
                phoneNumber: sessionStorage.getItem("phoneNumber"),
                email: user?.email,
                userId: user?.uid,
                userType:
                  sessionStorage.getItem("userType") === "creator"
                    ? "creator"
                    : "brand",
              }),
            });
            const data = await response.json();
            console.log(data);

            if (data.userType === "creator") {
              const resp = await fetch(
                `${API_SERVICE}/get_creator_by_id/${user.uid}`,
                {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }
              );

              const creator = await resp.json();
              console.log(creator);
              dispatch({
                type: "AUTH_STATE_CHANGED",
                payload: {
                  isAuthenticated: true,
                  user: {
                    id: user.uid,
                    userData: data,
                    // userType: data.userType,
                    creator: creator,
                    avatar: user.photoURL,
                    email: user.email,
                    name: user.displayName,
                    plan: "Premium",
                  },
                },
              });

              if (sessionStorage.loginType === "register") {
                router.push("/dashboard/onboarding");
              } else if (data?.disabled) {
                router.push("/account-disabled");
              } else {
                router.push("/dashboard/orders");
              }
            } else {
              dispatch({
                type: "AUTH_STATE_CHANGED",
                payload: {
                  isAuthenticated: true,
                  user: {
                    id: user.uid,
                    userData: data,
                    avatar: user.photoURL,
                    email: user.email,
                    name: user.displayName,
                    plan: "Premium",
                  },
                },
              });

              if (data?.disabled) {
                router.push("/account-disabled");
              } else {
                router.push("/dashboard/orders");
              }
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          dispatch({
            type: "AUTH_STATE_CHANGED",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
        sessionStorage.clear();
      }),
    [dispatch]
  );

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
