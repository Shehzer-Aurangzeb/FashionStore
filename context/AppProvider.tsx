"use client";

import React, {
  createContext,
  useEffect,
  useContext,
  useCallback,
  useState,
  useMemo,
} from "react";
import { AxiosError } from "axios";
import { api } from "@/config/api";
import _ from "lodash";
import { INITDATA } from "@/data/LoadEstoreWeb";
import { useCategoriesState } from "@/state/categories/hooks";

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
  const { setCategories } = useCategoriesState();

  const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after 5 seconds");
      }, 5000);
    });
  };

  const initApp = useCallback(() => {
    setIsAppLoading(true);
    fetchData().then((response) => {
      const categories = _.get(INITDATA, ["content", "category"]) || undefined;
      //@ts-ignore
      if (categories) setCategories(categories);
      setIsAppLoading(false);
    });
  }, [setCategories]);

  // values
  const value = useMemo(
    () => ({
      isAppLoading,
    }),
    [isAppLoading]
  );

  //* initialize the app.
  useEffect(() => {
    initApp();
  }, [initApp]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
export default AppProvider;
