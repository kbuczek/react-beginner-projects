import React, { useState, useContext } from "react";
import sublinks from "./data";
interface AppContextInter {
  isSidebarOpen: boolean;
}

const AppContext = React.createContext<AppContextInter>({} as AppContextInter);

const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
