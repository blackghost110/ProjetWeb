export enum ApiCodeResponse {
  TEST = 'api-result.test',
  STOCK_DETAIL_SUCCESS = 'api.error.stock-detail',
  TOKEN_GEN_ERROR = 'api.error.stock-detail',
  USER_ALREADY_EXIST = 'api.security.error.user-exist',
  CREDENTIAL_DELETE_ERROR = 'api.security.error.credential-delete',
  TOKEN_EXPIRED = 'api.security.error.token-expired',
  USER_NOT_FOUND = 'api.security.error.user-not-found',
  SIGNUP_ERROR = 'api.security.error.signup',
  NO_TOKEN_FOUNDED = 'api.security.error.no-token-found',
  PAYLOAD_IS_NOT_VALID = 'APII',
  COMMON_SUCCESS = 'SUCCES_IS_PERMANENT',
}
