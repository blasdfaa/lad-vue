import axios from 'axios';
import type { Pagination } from '~/shared/types/api';
import { buildApiUrl } from './utils';
import type { AuthorDetailsResponse, AuthorsListResponse, AuthorsListParams } from '~/shared/types/authors';

const BASE_URL = import.meta.env.VITE_QUOTES_API_DOMAIN;

const AUTHORS_PATH = '/authors';
const AUTHORS_DETAILS_PATH = '/authors/:id';

export async function fetchAuthors(params: AuthorsListParams) {
  const url = buildApiUrl(AUTHORS_PATH, BASE_URL);
  return axios.get<Pagination<AuthorsListResponse>>(url, { params }).then(({ data }) => data);
}

export async function fetchAuthorDetails(id: number) {
  const url = buildApiUrl(AUTHORS_DETAILS_PATH, BASE_URL).replace(':id', id.toString());
  return axios.get<AuthorDetailsResponse>(url).then(({ data }) => data);
}
