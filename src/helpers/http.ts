import axios, { AxiosInstance } from "axios";

interface ErrorResponse {
    message: string;
}

interface CustomHeaders {
    [key: string]: string;
}

const http: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_ENDPOINT}/api/v1`,
    timeout: 15000,
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

http.interceptors.response.use(
    (response: { data: any; }) => {
        return { data: response.data, ok: true };
    },
    (errorResponse: { toJSON: () => ErrorResponse; }) => {
        const error: ErrorResponse = errorResponse.toJSON();

        if (error.message.includes("401")) {
            // const authentication = useAuthenticationStore();
            // authentication.logout(false);

            console.log("Server returned 401, user will get logged out");
        } else {
            console.log("Exception from backend", error);
        }

        return { data: error, ok: false };
    }
);

const getHeaders = ({ skipAuth, multipart }: { skipAuth: boolean; multipart: boolean }, customHeaders: CustomHeaders = {}): CustomHeaders => {
    const headers: CustomHeaders = {
        ...customHeaders,
    };

    if (!skipAuth) {
        const token = localStorage.getItem("api-token");
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
    }

    if (multipart) {
        headers["Content-Type"] = "multipart/form-data";
    }
    return headers;
};

export const getRequest = ({ endpoint, skipAuth, multipart }: { endpoint: string; skipAuth: boolean; multipart: boolean }) => {
    return http.get(endpoint, {
        headers: getHeaders({ skipAuth, multipart }),
    });
};

export const postRequest = ({ endpoint, payload, skipAuth, multipart }: { endpoint: string; payload: any; skipAuth: boolean; multipart: boolean }) => {
    return http.post(endpoint, payload, {
        headers: getHeaders({ skipAuth, multipart }),
    });
};