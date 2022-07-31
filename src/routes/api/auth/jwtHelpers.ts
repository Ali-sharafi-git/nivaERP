import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { variables } from '$lib/utils/variables';

export function validatePassword (user, password) {
  if (!password || !user.password) {
    return false
  }
  return bcrypt.compareSync(password, user.password)
}

export function generateToken (user) {
  const payload = {
    userId: user.id,
    email: user.email
  }
  return jwt.sign(payload, variables.JWT_SECRET,{algorithm: 'HS256', expiresIn: '6h'})
}