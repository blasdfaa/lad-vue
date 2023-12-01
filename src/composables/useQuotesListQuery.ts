import { keepPreviousData, useQuery, type UseQueryReturnType } from '@tanstack/vue-query';
import type { AxiosError } from 'axios';
import { type Ref } from 'vue';
import { fetchQuoutes } from '~/api/quotes';
import type { Pagination } from '~/shared/types/api';
import type { QuotesListResponse } from '~/shared/types/quotes';

type Response = Pagination<QuotesListResponse>;
type Params = Ref<Parameters<typeof fetchQuoutes>[0]>;

export function useQuotesListQuery(params: Params): UseQueryReturnType<Response, AxiosError> {
  return useQuery({
    queryKey: ['quotes', params],
    queryFn: () => fetchQuoutes({ page: params.value.page }),
    placeholderData: keepPreviousData,
  });
}
