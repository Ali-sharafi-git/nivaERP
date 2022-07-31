import { getUserForLogin } from "$lib/db/user/login";
import { validatePassword } from "./jwtHelpers";
import {RS,RE} from "$lib/utils/endpoint";
import { generateToken } from "./jwtHelpers";
import ls from "$lib/stores/localStore";

export async function POST ({request}){
  const data = await request.json();
  const {email, password} = data;

  const user = await getUserForLogin(email);

  if(!validatePassword(user, password)){
    return RE(401, ls.auth.invalidCredentials);
  }

  const token = generateToken(user);

  return RS({token})

}