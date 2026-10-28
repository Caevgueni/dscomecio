import type { AxiosRequestConfig } from "axios";
import * as authService from "../Services/auth-service"
import { BASE_URL } from "../utils/system";
import axios from "axios";

export function requestBackend(config: AxiosRequestConfig) {
const headers = config.withCredentials
? {
...config.headers,
Authorization: "Bearer " + authService.getAccessToken()
}
: config.headers;
return axios({ ...config, baseURL: BASE_URL, headers });
}