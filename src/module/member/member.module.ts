import { Module } from '@nestjs/common';
import { MemberService } from './service/member.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Member} from "./model/entity/member.entity";
import {MemberPlan} from "./model/entity/member-plan.entity";
import {MemberSubscription} from "./model/entity/member-subscription.entity";
import { MemberController } from './controller/member.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription])],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
