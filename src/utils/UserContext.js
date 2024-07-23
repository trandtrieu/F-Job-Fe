import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const storedRecruiter = JSON.parse(localStorage.getItem("recruiter"));
    if (storedRecruiter) {
      setRecruiter(storedRecruiter);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (recruiter) {
      localStorage.setItem("recruiter", JSON.stringify(recruiter));
    } else {
      localStorage.removeItem("recruiter");
    }
  }, [recruiter]);

  return (
    <UserContext.Provider value={{ user, recruiter, setUser, setRecruiter }}>
      {children}
    </UserContext.Provider>
  );
};
