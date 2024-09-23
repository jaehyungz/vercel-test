"use client";
import { useGetUserInfo } from "@/api/hooks/user";
import Image from "next/image";

export default function Page() {
  const { data } = useGetUserInfo({
    // retry: true,
  });

  return (
    <div>
      <h1>
        hello
        {data?.firstName}
        {data?.lastName}
      </h1>
    </div>
  );
}
