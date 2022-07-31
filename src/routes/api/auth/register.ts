import { RE,RS } from "$lib/utils/endpoint";
import ls from "$lib/stores/localStore";
import { getUserForLogin } from "$lib/db/user/login";
import { hashPassword } from "./jwtHelpers";
import { insertUser } from "$lib/db/user/insert";

export async function POST ({request}){
  const data = await request.json();
  const {firstName, lastName, email, password} = data;


  if (!email || !password || !firstName || !lastName) {
    return RE(400, ls.auth.registerEmailOrUsernameRequired);
  }

  // Check if email already exists
  const existingUser = await getUserForLogin(email);
  if (existingUser) {
    return RE(400, ls.auth.registerEmailAlreadyExists);
  }

  const hashedPassword = hashPassword(password)

  const user = await insertUser({firstName, lastName, email, password})

  return RS({user})
}