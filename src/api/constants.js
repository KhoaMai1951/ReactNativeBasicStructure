export const PROTOCOL_HTTP = 'http';
export const HOST = '192.168.33.10';
export const PORT = '8080';

export const LOCAL_URL = PROTOCOL_HTTP + '://' + HOST + ':' + PORT;

export const LOGIN = '/login';

export const getAPI = (endpoint = '/test') => {
  return LOCAL_URL + endpoint;
};
