export enum ApiCodeResponse {

  // Security API Exceptions

  TEST = 'api-result.test',
  STOCK_DETAIL_SUCCESS = 'api.error.stock-detail',
  TOKEN_GEN_ERROR = 'api.error.stock-detail',
  USER_ALREADY_EXIST = 'api.security.error.user-exist',
  CREDENTIAL_DELETE_ERROR = 'api.security.error.credential-delete',
  TOKEN_EXPIRED = 'api.security.error.token-expired',
  USER_NOT_FOUND = 'api.security.error.user-not-found',
  SIGNUP_ERROR = 'api.security.error.signup',
  NO_TOKEN_FOUNDED = 'api.security.error.no-token-found',
  PAYLOAD_IS_NOT_VALID = 'API',
  COMMON_SUCCESS = 'SUCCESS_IS_PERMANENT',


  // Member Service Exceptions

  MEMBER_PAYLOAD_ACTIVE_INVALID = 'api.member.error.create-member',
  MEMBER_PAYLOAD_SUBSCRIPTION_NOT_VALID = 'api.member.error.create-member',
  MEMBER_PAYLOAD_ACTIVATION_CODE_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_IBAN_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_PHONE_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_MAIL_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_MAIL_IS_NOT_VALID = 'api.member.error.create-member',
  MEMBER_PAYLOAD_BIRTHDATE_IS_NOT_VALID = 'api.member.error.create-member',
  MEMBER_PAYLOAD_LASTNAME_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_LASTNAME_IS_NOT_STRING = 'api.member.error.create-member',
  MEMBER_PAYLOAD_FIRSTNAME_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_FIRSTNAME_IS_NOT_STRING = 'api.member.error.create-member',
  MEMBER_PAYLOAD_MEMBER_ID_LENGTH_ERROR = 'api.member.error.create-member',
  MEMBER_PAYLOAD_MEMBER_ID_MANDATORY = 'api.member.error.create-member',



  MEMBER_UPDATE_EXCEPTION = 'api.member.error.create-member',
  MEMBER_LIST_EXCEPTION = 'api.member.error.create-member',
  MEMBER_DELETE_EXCEPTION = 'api.member.error.create-member',
  MEMBER_NOT_FOUND_EXCEPTION = 'api.member.error.create-member',
  MEMBER_CREATE_EXCEPTION = 'api.member.error.create-member',

  MEMBERPLAN_UPDATE_EXCEPTION = 'api.member.error.create-member',
  MEMBERPLAN_LIST_EXCEPTION = 'api.member.error.create-member',
  MEMBERPLAN_DELETE_EXCEPTION = 'api.member.error.create-member',
  MEMBERPLAN_NOT_FOUND_EXCEPTION = 'api.member.error.create-member',
  MEMBERPLAN_CREATE_EXCEPTION = 'api.member.error.create-member',

}
