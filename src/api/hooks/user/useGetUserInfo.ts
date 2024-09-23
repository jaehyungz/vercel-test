import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useGetUserInfoReponse } from "../../types";
import { fetcher } from "@/api";

const useGetUserInfo = (
  options?: Omit<UseQueryOptions<useGetUserInfoReponse, any, any>, "queryKey">
) => {
  return useQuery<useGetUserInfoReponse>({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
    ...options,
  });
};

const getUserInfo = async () => {
  const response = await fetcher("/auth/me");

  const data: useGetUserInfoReponse = await response.json();

  return data;
};

export { useGetUserInfo };
