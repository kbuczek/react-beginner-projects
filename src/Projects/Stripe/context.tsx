import React, { useState, useContext } from "react";
import { FaCreditCard } from "react-icons/fa";
import sublinks from "./data";

interface AppContextInter {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: Function;
  closeSidebar: Function;
  openSubmenu: Function;
  closeSubmenu: Function;
  location: Location;
  page: Page;
}

interface Location {
  center: number;
  bottom: number;
}

interface Page {
  page: string;
  links: { label: string; icon: JSX.Element; url: string }[];
}

const AppContext = React.createContext<AppContextInter>({} as AppContextInter);

export const AppProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState<Location>({ center: 0, bottom: 0 });
  const [page, setPage] = useState<Page>({
    page: "",
    links: [],
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text: string, coordinates: Location) => {
    const page = sublinks.find((link) => link.page === text);
    if (page) {
      setPage(page);
    }
    setLocation(coordinates);
    // console.log(location);
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
        location,
        page,
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
