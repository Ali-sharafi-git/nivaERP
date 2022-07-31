export async function getUserForLogin(email: string) {
  const user = await new Promise((resolve,) => {
    resolve({id:0, email:"ali.sharafi@gmail.com", password:"123456"});
  })
  return user;
}