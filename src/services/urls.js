// IMPORT SERVER BASE URL
const BE_URL = process.env.REACT_APP_SERVER_BASE_URL;
console.log(BE_URL);
// CREATE CHECKOUT SESSION URL
export const CHECKOUT_SESSION_URL = `${BE_URL}api/stripe/create-checkout-session`;
console.log(CHECKOUT_SESSION_URL);
