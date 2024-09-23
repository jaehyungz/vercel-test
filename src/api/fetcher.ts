import Cookies from "js-cookie";

export async function fetcher(url: string, init?: RequestInit) {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const response = await fetch(`${baseURL}${url}`, {
    headers: {
      Authorization: Cookies.get("token") ?? "",
      ...init?.headers,
    },
    ...init,
  });

  if (!response.ok) {
    const res = await response.json();
    console.log(res);
    console.log(response);

    throw new Error(res.message, {
      cause: {
        code:
          response.status === 401 || response.status === 403
            ? response.status
            : "default",
      },
    });
  }

  return response;
}
