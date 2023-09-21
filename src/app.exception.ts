import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiException} from "@common/api/exception";

export class TestException extends ApiException {
  constructor() {
    super(ApiCodeResponse.TEST, 200);
  }
}
