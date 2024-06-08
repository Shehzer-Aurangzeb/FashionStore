import React from "react";
import Image from "next/image";
import { leftArrow, rightArrow } from "@/public/assets";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 gap-x-3">
      <button
        className="w-4 h-4"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src={leftArrow} alt="" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`px-2 py-1 mx-1 border rounded-full items-center ${
              page === currentPage ? "bg-gray-300 bg-black text-white" : ""
            }`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className="w-4 h-4"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src={rightArrow} alt="" />
      </button>
    </div>
  );
};

export default CustomPagination;
