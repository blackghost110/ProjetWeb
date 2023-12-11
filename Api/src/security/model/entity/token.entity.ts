import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
import {Credential} from './credential.entity';
import {ulid} from "ulid";
@Entity()
export class Token { // PIPELINE la ligne d'en bas marche pas, faut fixer un truc pour qu'a chaque nouveaux truc, cela cree un nouvel id
    @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
    token_id: string;
    @Column({nullable: false})
    token: string;
    @Column({nullable: false})
    refreshToken: string;

    @OneToOne(() => Credential,{eager:true})
    @JoinColumn({name: 'credential_id'})
    credential: Credential
}