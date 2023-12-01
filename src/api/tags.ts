import axios from 'axios';
import { buildApiUrl } from './utils';
import type { TagsListResponse } from '~/shared/types/tags';

const BASE_URL = import.meta.env.VITE_QUOTES_API_DOMAIN;

const TAGS_PATH = '/tags';

export async function fetchTagsList() {
  const url = buildApiUrl(TAGS_PATH, BASE_URL);
  return axios.get<TagsListResponse[]>(url).then(({ data }) => data);
}
