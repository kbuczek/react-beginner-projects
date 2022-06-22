import React, { useState, useContext } from "react";

interface AppContextInter {
  isModalOpen: boolean;
  isSidebarOpen: boolean;
  openSidebar: Function;
  closeSidebar: Function;
  openModal: Function;
  closeModal: Function;
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
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook (has to start with "use" keyword)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
