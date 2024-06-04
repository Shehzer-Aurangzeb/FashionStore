"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import _ from "lodash";

type ModalContextType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
interface IProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

function ModalProvider({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // values
  const value = useMemo(
    () => ({
      isOpen,
      handleOpen,
      handleClose,
    }),
    [isOpen]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
export default ModalProvider;
