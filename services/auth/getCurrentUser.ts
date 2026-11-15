import { apiAuthenticated } from "../api-client";
import { API_ENDPOINTS } from "../api-endpoints";
import { BackendUser } from "../interfaces";

export async function getCurrentUser(
  accessToken: string,
): Promise<BackendUser> {
  return apiAuthenticated<BackendUser>(API_ENDPOINTS.AUTH.ME, accessToken);
}
