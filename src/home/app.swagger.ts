import {ApiOperationOptions} from "@nestjs/swagger";

export const AppControllerHelloWorld: ApiOperationOptions = {
    summary: 'Hello world',
    description: 'Ma super description pour cette méthode'
};

//export const getHelloApiReponse200: ApiReponseOptions = {status 200, description: 'heloo man'}
