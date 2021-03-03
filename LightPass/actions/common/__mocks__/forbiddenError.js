import { Response } from 'node-fetch';
import createErrorFromResponse from '../../../common/createErrorFromResponse';

const res = new Response('{"message":"Forbidden"}', { status: 403 });

export default createErrorFromResponse(res);
