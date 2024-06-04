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
import { Category } from "@/state/categories/types";
import { useProducts } from "@/state/products/hooks";

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
  const { setProducts } = useProducts();

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
      //@ts-ignore
      const categories: Category[] | undefined =
        _.get(INITDATA, ["content", "category"]) || undefined;
      if (categories) {
        setCategories(categories);
        const products = _.flatMapDeep(categories, (category) =>
          _.flatMapDeep(category.subCategories, (subCategory) =>
            _.flatMapDeep(
              subCategory.products,
              (product) => product.subProducts
            )
          )
        );
        setProducts(products);
      }

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
