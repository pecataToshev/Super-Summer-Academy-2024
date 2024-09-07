export class PaginationDto<T> {
  items: T[];
  totalItems: number;
  pageNumber: number;
  itemsPerPage: number;
}
