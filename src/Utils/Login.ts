import { map } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export const login = (credentials = {}) =>
  ajax({
    url: "/api/token/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  }).pipe(
    map(({ response }) => ({
      accessToken: response.access,
      refreshToken: response.refresh,
    }))
  );

export const me = (token: string) =>
  ajax.getJSON("/api/me/", {
    Authorization: `Bearer ${token}`,
  });

export const refresh = (refreshToken: any) =>
  ajax({
    url: "/api/token/refresh/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { refresh: refreshToken },
  }).pipe(
    map(({ response }) => ({
      refreshToken,
      accessToken: response.access,
    }))
  );
