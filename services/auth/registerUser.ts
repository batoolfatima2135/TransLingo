import { apiPublic } from "@/services/api-client";
import { API_ENDPOINTS } from "../api-endpoints";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  password: string;
}

export async function registerUser(data: RegisterRequest): Promise<void> {
  console.log("Registering user with data:", data);
  await apiPublic<void>(API_ENDPOINTS.AUTH.REGISTER, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    }),
  });
}
