import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ulid} from "ulid";
@Entity()
export class Credential {
    @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
    credential_id: string;
    @Column({nullable: false, unique: true})
    username: string;
    @Column({nullable: true})
    password: string;
    @Column({nullable: false, unique: true})
    mail: string;
    @Column({default: true})
    active: boolean;
    @CreateDateColumn()
    created: Date;
    @UpdateDateColumn()
    updated: Date;
}