/* eslint-disable */
let io = require('socket.io-client');
import { API_URL } from '@/utils/api';

let socket = io(API_URL, {
	path: '/',
	transports: ['websocket', 'polling'],
	// TODO: 
	// 1. Sockets Header Check;
	// 2. Sockets User Authentication Verification;
});

export default socket;
