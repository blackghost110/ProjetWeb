import { ApiCodeResponse } from './enum/api-code.response';

export interface ApiResponse {
  result: boolean; // true
  code: ApiCodeResponse; // STOCK_DETAIL_SUCCESS
  data: any; // les details du stock demandé
}
