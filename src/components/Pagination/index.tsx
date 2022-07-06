/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';

import { CharactersContext } from 'context/CharacterContext';
import { usePagination, DOTS } from 'hooks/usePagination';

import {
  Container,
  PaginationContainer,
  PaginationItem,
  ArrowRightIcon,
  ArrowLeftIcon
} from './styles';

type PaginationProps = {
  onPageChange: (value: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
};

export default function Pagination({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 2
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const { setFilters } = useContext(CharactersContext);

  const onNext = () => {
    setFilters((prevState) => ({ ...prevState, offset: prevState.offset + 20 }));
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    setFilters((prevState) => ({ ...prevState, offset: prevState.offset - 20 }));
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : null;

  return (
    <Container>
      <PaginationContainer>
        <PaginationItem className="arrow" onClick={onPrevious} disabled={currentPage === 1}>
          <ArrowLeftIcon />
        </PaginationItem>

        {paginationRange &&
          paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <PaginationItem key={index} className="dots">
                  &#8230;
                </PaginationItem>
              );
            }

            return (
              <PaginationItem
                isSelected={pageNumber === currentPage}
                key={index}
                onClick={() => onPageChange(Number(pageNumber))}
              >
                {pageNumber}
              </PaginationItem>
            );
          })}

        <PaginationItem onClick={onNext} disabled={currentPage === lastPage} className="arrow">
          <ArrowRightIcon />
        </PaginationItem>
      </PaginationContainer>
    </Container>
  );
}
