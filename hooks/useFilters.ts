import { api } from "@/config/api";
import { FILTERS } from "@/data/LoadEstoreWeb";
import { TFilter } from "@/types";
import { fakeFetch } from "@/utils";
import { useCallback, useEffect, useState } from "react";

export type TProps = {
  categoryId: number;
};

export const useFetchFilters = ({ categoryId }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<TFilter[]>([]);

  const fetchFilters = useCallback(async () => {
    setIsLoading(true);
    if (process.env.NEXT_PUBLIC_REACT_APP_NODE_ENV === "development") {
      fakeFetch().then((response) => {
        setFilters(FILTERS.content.filters);
        setIsLoading(false);
      });
    } else {
      try {
        const { data } = await api.post("GetFilters", {
          categoryId,
        });
        if (data.status.isSuccess) {
          setFilters(data.content.filters);
          setIsLoading(false);
        }
      } catch (e) {
        console.log("e", e);
      }
     
    }
  }, [categoryId]);

  useEffect(() => {
    // if (!categoryId.length) return;
    fetchFilters();
  }, [categoryId, fetchFilters]);
  return {
    filters,
    isLoading,
  };
};
