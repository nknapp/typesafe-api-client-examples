import {ok} from "oazapfts";
import {defaults, encryptPassword} from "./oazapfts-client";


defaults.headers = {
    authorization: "Bearer myToken"
}

async function apiEncryptPassword(): Promise<string> {
    const responseBody = await ok(encryptPassword({password: "test"}))
    return responseBody.encryptedPassword
}
