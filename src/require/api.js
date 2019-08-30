import {  get,post } from './http';


export const pois = options => get('restapi/bgs/poi/search_poi_nearby', options);

export const captchas = options => post('v1/captchas', options);

export const login = options => post('v2/login', options);

export const user = options => get('v1/user', options);

export const addresses = options => get('v1/users/'+localStorage.getItem('id')+'/addresses', options);

export const newaddresses = options => post('v1/users/'+localStorage.getItem('id')+'/addresses', options);

export const changepassword = options => post('v2/changepassword', options);


// http://localhost:8000/v1/pois?type=nearby&keyword=%E9%87%91%E8%B0%B7%E5%9B%AD
// http://localhost:8080/v1/pois?type=nearby&keyword=%E9%87%91%E8%B0%B7%E5%9B%AD
