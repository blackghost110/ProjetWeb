import {CanActivate, ExecutionContext, Injectable, Logger} from "@nestjs/common";
import {JwtService} from '@nestjs/jwt';
import {from, Observable} from 'rxjs';
import {NoTokenFoundedException, TokenExpiredException} from '../security.exception';
import {Reflector} from '@nestjs/core';
import {isNil} from 'lodash';
import {map} from 'rxjs/operators';
import {Credential} from '../model';
import {SecurityService} from "../service/security.service";
import {IS_PUBLIC_KEY} from "@common/config/metadata";

@Injectable()
export class JwtGuard implements CanActivate {
    private readonly logger = new Logger(JwtGuard.name);
    constructor(private readonly jwtService: JwtService,
                private readonly securityService: SecurityService,
                private reflector: Reflector) {
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        //Here we check if route have @Public decorator;
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY,
            [context.getHandler(), context.getClass()]);
        return isPublic ? true : this.validateToken(context.switchToHttp().getRequest());
    }


    private validateToken(request: any): Observable<boolean> {
        // token existe dans le header ?
        if (!isNil(request.headers['authorization'])) {
            try {
                // tente de recuperer mon id. si token pas valide, il est catch
                const id = this.jwtService.verify(request.headers['authorization'].replace('Bearer ', '')).sub;
                // si token valide, on ajoute user dans le request, pour savoir de qui vient le token
                return from(this.securityService.detail(id)).pipe(
                    map((user: Credential) => {
                        // on stocke objet Credential dans la requette
                        request.user = user;
                        return true;
                    })
                );
            } catch (e) {
                this.logger.log(e.message);
                throw new TokenExpiredException()
            }
        }
        throw new NoTokenFoundedException();
    }
}