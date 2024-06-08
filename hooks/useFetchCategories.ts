import { api } from "@/config/api";
import { INITDATA } from "@/data/LoadEstoreWeb";
import { useCategoriesState } from "@/state/categories/hooks";
import { useProducts } from "@/state/products/hooks";
import { fakeFetch } from "@/utils";
import _ from "lodash";
import { useCallback } from "react";

export const useFetchCategories = () => {
  const { setCategories } = useCategoriesState();
  const { setProducts } = useProducts();

  const fetchCategories = useCallback(
    async (callback?: () => void) => {
      if (process.env.NEXT_PUBLIC_REACT_APP_NODE_ENV === "development") {
        fakeFetch().then((response) => {
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
          if (callback) callback();
        });
      } else {
        const { data } = await api.post("LoadEstoreWeb", {});
        if (data.status.isSuccess) {
          //@ts-ignore
          const categories: Category[] | undefined =
            _.get(data, ["content", "category"]) || undefined;
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
          if (callback) callback();
        }
      }
    },
    [setCategories, setProducts]
  );

  return {
    fetchCategories,
  };
};
