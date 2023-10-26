import crypto from 'crypto';

const SECRET = 'IAGO-API-SECRET'


export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (password: String, salt: String) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
}