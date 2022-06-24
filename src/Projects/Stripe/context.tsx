import React, { useState, useContext } from "react";
import sublinks from "./data";
interface AppContextInter {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: Function;
  closeSidebar: Function;
  openSubmenu: Function;
  closeSubmenu: Function;
}

const AppContext = React.createContext<AppContextInter>({} as AppContextInter);

export const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
