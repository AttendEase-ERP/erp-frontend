let tokenGetter: (() => Promise<string | null>) | null = null;

export function setTokenGetter(fn: () => Promise<string | null>) {
  tokenGetter = fn;
}

const BASE_URL = "http://localhost:5000";

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = tokenGetter ? await tokenGetter() : null;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API request failed");
  }

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    return res.text() as unknown as T;
  }
}

export const api = {
  get: <T>(endpoint: string, options?: RequestInit) =>
    request<T>(endpoint, { ...options, method: "GET" }),
  post: <T>(endpoint: string, body?: unknown, options?: RequestInit) =>
    request<T>(endpoint, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    }),
  put: <T>(endpoint: string, body?: unknown, options?: RequestInit) =>
    request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    }),
  delete: <T>(endpoint: string, options?: RequestInit) =>
    request<T>(endpoint, { ...options, method: "DELETE" }),
};
