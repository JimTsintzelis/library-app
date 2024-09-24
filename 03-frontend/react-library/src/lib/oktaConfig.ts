export const oktaConfig = {
    clientId: '',
    issuer: 'https://<....>oauth2/default',
    redirectUrl: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile','email'],
    pcke: true,
    disableHttpsCheck: true,
}
