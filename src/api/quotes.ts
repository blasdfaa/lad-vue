import axios from 'axios'
import { buildApiUrl } from './utils'
import type { Pagination } from '~/shared/types/api'
import type {
  QuoteDetailsResponse,
  QuotesListParams,
  QuotesListResponse,
  QuotesSearchResponse,
} from '~/shared/types/quotes'

const BASE_URL = import.meta.env.VITE_QUOTES_API_DOMAIN

const QUOTES_PATH = '/quotes'
const QUOTES_DETAILS_PATH = '/quotes/:id'
const QUOTES_SEARCH_PATH = '/search/quotes'

export async function fetchQuoutes(params: QuotesListParams) {
  const url = buildApiUrl(QUOTES_PATH, BASE_URL)
  return axios.get<Pagination<QuotesListResponse>>(url, { params }).then(({ data }) => data)
}

export async function fetchQuouteDetails(id: string) {
  const url = buildApiUrl(QUOTES_DETAILS_PATH, BASE_URL).replace(':id', id)
  return axios.get<QuoteDetailsResponse>(url).then(({ data }) => data)
}

export async function searchQuotes(query: string) {
  const url = buildApiUrl(QUOTES_SEARCH_PATH, BASE_URL)
  return axios.get<Pagination<QuotesSearchResponse>>(url, { params: { query } }).then(({ data }) => data)
}
