const BACKEND_URL = process.env.API_URL;

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type ApiOptions = RequestInit & {
  accessToken?: string;
};

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));

    throw new ApiError(
      data.detail ?? data.message ?? data.title ?? "Backend request failed",
      response.status,
    );
  }

  if (
    response.status === 204 ||
    response.headers.get("content-length") === "0"
  ) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

async function request<T>(
  endpoint: string,
  options: ApiOptions = {},
): Promise<T> {
  if (!BACKEND_URL) {
    throw new Error("API_URL is not configured");
  }

  const { accessToken, headers, ...requestOptions } = options;

  const response = await fetch(`${BACKEND_URL}${endpoint}`, {
    ...requestOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    cache: "no-store",
  });

  return handleResponse<T>(response);
}

// For endpoints that don't require authentication
export function apiPublic<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  return request<T>(endpoint, options);
}

// For endpoints that require a bearer token
export function apiAuthenticated<T>(
  endpoint: string,
  accessToken: string,
  options: RequestInit = {},
): Promise<T> {
  return request<T>(endpoint, {
    ...options,
    accessToken,
  });
}
