import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "../entity/member-subscription.entity";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";

export class MemberCreatePayload {
    @ApiProperty()
    @IsString({message : ApiCodeResponse.CREDENTIAL_DELETE_ERROR})
    @IsOptional()
    @Length(1, 50)
    firstname: string;

    @IsString()
    @IsOptional()
    @Length(1, 50)
    lastname: string;

    @IsDate()
    @IsOptional()
    birthdate: Date;

    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    mail: string;

    @IsOptional()
    @Length(1, 50)
    phone: string;

    @IsOptional()
    @Length(1, 34)
    iban: string;

    @IsOptional()
    @Length(1, 10)
    code_activation: string;

    @IsOptional()
    @IsArray()
    subscriptions: MemberSubscription[];

    @IsOptional()
    @IsBoolean()
    active: boolean
}