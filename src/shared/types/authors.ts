export interface AuthorsListParams {
  /** Filter authors by slug.
   * @description
   * The value can be one or more author slugs. To get multiple authors by slug, the value should be a pipe separated list of slugs.
   * @example
   * ```
   * "/authors?slug=albert-einstein"
   * "/authors?slug=albert-einstein|abraham-lincoln"
   * ```
   */
  slug?: string;
  /**
   * The field used to sort authors.
   * @default "name"
   * @example
   * ```
   * "/authors?sortBy=name"
   * "/authors?sortBy=quoteCount&order=desc"
   * ```
   */
  sortBy?: 'dateAdded' | 'dateModified' | 'name' | 'conquoteCounttent';
  /**
   * The order in which results are sorted.
   * @description
   * The default order depends on the sortBy field.
   * For string fields that are sorted alphabetically (ie `name`), the default order is ascending.
   * For number and date fields (ie `quoteCount`) the default order is descending.
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

export interface AuthorsListResponse {
  /** A unique id for this author */
  _id: string;
  /** A brief, one paragraph bio of the author. Source: wiki API */
  bio: string;
  /**
   * A one-line description of the author.
   * @description
   * Typically it is the person's primary occupation or what they are know for.
   */
  description: string;
  /** The link to the author's wikipedia page or official website */
  link: string;
  /** The authors full name */
  name: string;
  /** A slug is a URL-friendly ID derived from the authors name. It can be used as */
  slug: string;
  /** The number of quotes by this author */
  quoteCount: string;
}

export interface AuthorDetailsResponse {
  /** A unique id for this author */
  _id: string;
  /** A brief, one paragraph bio of the author. Source wiki API. */
  bio: string;
  /** A one-line description of the author. */
  description: string;
  /** The link to the author's wikipedia page or official website */
  link: string;
  /** The authors full name */
  name: string;
  /** A slug is a URL-friendly ID derived from the authors name. It can be used as */
  slug: string;
  /** The number of quotes by this author */
  quoteCount: string;
}
