import React, { createContext } from "react";

export const MyContext = createContext({
  section: "home",
  setSection: (newSection) => {},
  isAdmin: false,
  setIsAdmin: () => {},
});
