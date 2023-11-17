import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {ulid} from "ulid";
import {Address} from "@common/model";
import {MemberSubscription} from "./member-subscription.entity";

@Entity()
export class Member extends BaseEntity { // PIPELINEEEEE corriger la ligne du dessous
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`}) //accepte pas d'avoir cette valeur commeca, il va generer ulid et reprendre cette valeur par defaut, peut etre changer quelque truc dans la ligne
    member_id: string;
    @Column({length: 50, nullable: true})
    firstname: string;
    @Column({length: 50, nullable: true})
    lastname: string;
    @Column({nullable: true})
    birthdate: Date;
    @Column({length: 50, nullable: true})
    mail: string;
    @Column({length: 15, nullable: true})
    phone: string;
    @Column({length: 34, nullable: true})
    iban: string;
    @Column({length: 10, nullable: true})
    code_activation: string;

    @OneToMany(() => MemberSubscription, (ms) => ms.member, {cascade: true, eager: true})
    subscriptions: MemberSubscription[];

    @OneToOne(() => Address, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'address_id', name: 'address_id_fk'})
    address: Address;

    @Column({default: false})
    active: boolean;

}