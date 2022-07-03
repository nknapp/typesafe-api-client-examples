import {DefaultService} from "./__generated__";

async function encryptPassword() {
    const response = await DefaultService.encryptPassword({password: "test"})
    return response.encryptedPassword
}
