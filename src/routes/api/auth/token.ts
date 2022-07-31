import { getUserForLogin } from "$lib/db/user/login";
import { validatePassword } from "./jwtHelpers";
import {RS,RE} from "$lib/utils/endpoint";
import { generateToken } from "./jwtHelpers";

export async function POST ({request}){
  const {body} = request;
  const {email, password} = body;

  const user = await getUserForLogin(email);

  if(!validatePassword(user, password)){
    return RE(401, "Invalid email or password");
  }

  const token = generateToken(user);
  console.log('token', token)

  return RS({token})

}