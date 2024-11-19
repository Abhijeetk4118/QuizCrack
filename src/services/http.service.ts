import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
    private http: AxiosInstance;

    constructor(baseURL: string) {
        // Initialize Axios with a base URL and default config
        this.http = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
        });
    }

    // Generic GET request
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.get<T>(url, config);
        return response.data;
    }

    // Generic POST request
    async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.post<T>(url, data, config);
        return response.data;
    }

    // Generic PATCH request
    async patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.patch<T>(url, data, config);
        return response.data;
    }

    // Generic DELETE request
    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.http.delete<T>(url, config);
        return response.data;
    }
}
