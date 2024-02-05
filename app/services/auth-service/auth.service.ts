import { createStore } from "effector";
import { createMutation } from '@farfetched/core';
import { IUser } from "./auth.service.interface";

function createAuthApi(params = {}) {
  const $response = createStore<{}>({});
  const $pending = createStore<boolean>(false);

  const loginMutation = createMutation({
      handler: async (user: IUser) => {
      const response = await fetch('https://test-api.itrum.ru/api/auth/token/login/', {
        method: 'POST',
        body: JSON.stringify(user),  
        headers: {
          "content-type": "application/json",
        }
      })
      const data = await response.json();
      return data;
    }    
  })

  $response.on(loginMutation.finished.success, (_, response) => response.result);
  $pending.on(loginMutation.$pending, (_, pending) => pending);

  return {
    $pending,
    $response,
    loginMutation
  }

}

export const AuthApi = createAuthApi();