import {  get,post } from './http';

// export const harvest = options => post('api/base/harvest?token='+localStorage.getItem('token'), options);


export const captchas = options => post('v1/captchas', options);

export const login = options => post('v2/login', options);

export const user = options => get('v1/user', options);