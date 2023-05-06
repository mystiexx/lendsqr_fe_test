import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface paginationProps {
  pageCount: number;
  handlePageClick: (selected: number) => void;
}

const Pagination: React.FC<paginationProps> = ({
  pageCount,
  handlePageClick,
  ...rest
}) => {
  const handlePageClickInternal = (data: { selected: number }) => {
    handlePageClick(data.selected);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<BiChevronRight />}
        onPageChange={handlePageClickInternal}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<BiChevronLeft />}
        containerClassName={styles.container}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
        {...rest}
      />
    </div>
  );
};

export default Pagination;
