export const oktaConfig = {
    clientId: '',
    issuer: 'https://<....>oauth2/default',
    redirectUrl: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile','email'],
    pcke: true,
    disableHttpsCheck: true,
}
