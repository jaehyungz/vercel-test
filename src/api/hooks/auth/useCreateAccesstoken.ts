import { fetcher } from "@/api";
import {
  useCreateAccesstokenReponse,
  useCreateAccesstokenVariables,
} from "@/api/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useCreateAccesstoken = (
  options?: UseMutationOptions<
    useCreateAccesstokenReponse,
    any,
    useCreateAccesstokenVariables
  >
) => {
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: createAccessToken,
    ...options,
  });
};

const createAccessToken = async (res: useCreateAccesstokenVariables) => {
  const response = await fetcher("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: res.username,
      password: res.password,
      expiresInMins: 30, // optional, defaults to 60
    }),
    // credentials: "include",
  });

  const data = await response.json();

  return data;
};
