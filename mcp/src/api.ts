import { getApiBaseUrl } from "./config.js";

const apiRequest = async <T>(
  path: string,
  options: RequestInit = {},
): Promise<T> => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error.error || `API error: ${res.status}`);
  }

  return res.json();
};

export interface AuthStartResponse {
  code: string;
  url: string;
  expires_at: string;
}

export interface AuthPollResponse {
  status: "pending" | "success" | "expired";
  token?: string;
  refresh_token?: string;
  user?: {
    id: string;
    name: string | null;
    email: string | null;
    avatar_url: string | null;
  };
}

export interface AuthValidateResponse {
  valid: boolean;
}

export interface AuthRefreshResponse {
  success: boolean;
  access_token?: string;
  refresh_token?: string;
  expires_at?: number;
  error?: string;
}

export interface SessionsPublishResponse {
  id: string;
  status: string;
}

export interface SessionsPollResponse {
  status: string;
  url?: string;
  error?: string;
}

export const api = {
  auth: {
    start: (): Promise<AuthStartResponse> =>
      apiRequest("/api/auth/start", { method: "POST" }),

    poll: (code: string): Promise<AuthPollResponse> =>
      apiRequest(`/api/auth/poll?code=${encodeURIComponent(code)}`),

    validate: (token: string): Promise<AuthValidateResponse> =>
      apiRequest(`/api/auth/validate?token=${encodeURIComponent(token)}`),

    refresh: (refresh_token: string): Promise<AuthRefreshResponse> =>
      apiRequest("/api/auth/refresh", {
        method: "POST",
        body: JSON.stringify({ refresh_token }),
      }),
  },

  sessions: {
    publish: (data: {
      title?: string;
      conversation_data: string;
      is_public: boolean;
      access_token: string;
    }): Promise<SessionsPublishResponse> =>
      apiRequest("/api/sessions/publish", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    poll: (id: string): Promise<SessionsPollResponse> =>
      apiRequest(`/api/sessions/poll?id=${encodeURIComponent(id)}`),
  },
};
