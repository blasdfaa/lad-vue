export interface QuotesListParams {
  /** The maximum Length in characters (can be combined with `minLength`) */
  maxLength?: number;
  /** The minimum Length in characters (can be combined with `maxLength`) */
  minLength?: number;
  /**
   * Filter quotes by tag(s).
   * @description
   * Takes a list of one or more tag names, separated by a comma (meaning `AND`) or a pipe (meaning `OR`).
   * A comma separated list will match quotes that have all of the given tags.
   * While a pipe (`|`) separated list will match quotes that have either of the provided tags.
   * Tag names are not case-sensitive. Multi-word tags can be kebab-case ("tag-name") or space separated ("tag name")
   * @example
   * ```
   * "/quotes?tags=love|happiness"
   * "/quotes?tags=technology,famous-quotes"
   * ```
   */
  tags?: string;
  /**
   * Get quotes by a specific author.
   * @description
   * The value can be an author `name` or `slug`. To get quotes by multiple authors, provide a pipe separated list of author names/slugs.
   * @example
   * ```
   * "/quotes?author=albert-einstein"
   * ```
   */
  author?: string;
  /**
   * The field used to sort quotes
   * @default "dateAdded"
   */
  sortBy?: 'dateAdded' | 'dateModified' | 'author' | 'content';
  /**
   * The order in which results are sorted.
   * @description
   * The default order depends on the sortBy field.
   * For string fields that are sorted alphabetically, the default order is ascending.
   * For number and date fields, the default order is descending.
   *
   * Default: depends on `sortBy` param
   */
  order?: 'asc' | 'desc';
  /**
   * Sets the number of results per page.
   * Min: `1`
   * Max: `150`
   * @default 20
   */
  limit?: number;
  /**
   * The page of results to return.
   * Min: `1`
   * @description
   * If the value is greater than the total number of pages, request will not return any results
   * @default 1
   */
  page?: number;
}

export interface QuotesListResponse {
  _id: string;
  /** The quotation text */
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
}

export interface QuoteDetailsResponse {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
}

export interface QuotesSearchResponse {
  author: string;
  authorId: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}
