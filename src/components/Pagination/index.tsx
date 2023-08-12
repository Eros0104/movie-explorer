import React from "react";
import { PageButton, PaginationWrapper } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const pageRangeDisplayed = 2;

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - pageRangeDisplayed);
    const endPage = Math.min(totalPages, currentPage + pageRangeDisplayed);

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      );
    }

    return buttons;
  };

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>;
};

export default Pagination;
