import OpenAPIClientAxios, {OpenAPIV3} from 'openapi-client-axios';
import spec from './openapi.json'
import {Client, Components} from "./client";

const api = new OpenAPIClientAxios({definition: spec as OpenAPIV3.Document});
const client = api.initSync<Client>();

async function encryptPassword() {
    const response = await client.encryptPassword(null, {password: "test"})
    return response.data.encryptedPassword
}


