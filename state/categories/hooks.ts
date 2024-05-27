import { useSelector } from "react-redux";
import { CategoriesSliceType, Category } from "./types";
import { RootState, useAppDispatch } from "../store";
import { useCallback } from "react";
import { setCategoriesAction } from ".";

export const useCategoriesState = () => {
  const { categories } = useSelector<RootState, CategoriesSliceType>(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  const setCategories = useCallback(
    (payload: Category[]) => {
      dispatch(setCategoriesAction(payload));
    },
    [dispatch]
  );

  return {
    categories,
    setCategories,
  };
};
