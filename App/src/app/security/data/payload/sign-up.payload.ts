import {Payload} from "@shared";

export interface SignupPayload extends Payload{
  username: string
  password: string
  mail: string
}
