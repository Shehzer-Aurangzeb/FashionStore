"use client";

import React, {
  createContext,
  useEffect,
  useContext,
  useCallback,
  useState,
  useMemo,
} from "react";
import _ from "lodash";
import { useFetchCategories } from "@/hooks/useFetchCategories";

type AppContextType = {
  isAppLoading: boolean;
};
interface IProps {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({
  isAppLoading: false,
});

function AppProvider({ children }: IProps) {
  const [isAppLoading, setIsAppLoading] = useState(false);
  const { fetchCategories } = useFetchCategories();

  const initApp = useCallback(
    (callback: () => void) => {
      fetchCategories(callback);
    },
    [fetchCategories]
  );

  // values
  const value = useMemo(
    () => ({
      isAppLoading,
    }),
    [isAppLoading]
  );

  //* initialize the app.
  useEffect(() => {
    setIsAppLoading(true);
    initApp(() => setIsAppLoading(false));
  }, [initApp]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
