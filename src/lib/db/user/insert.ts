import type { User } from '$lib/types/auth/user';

export async function insertUser(user: User): Promise<User> {
  const result = await new Promise((resolve,) => {
    resolve({id:0, email:"ali.sharafi@gmail.com", password:"123456"});
  })
  return result;
}