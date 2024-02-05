import { createMutation } from "@farfetched/core";
import { createEvent, createStore } from "effector";
import { RegisterUser, User } from "./register.interface";
import { sample } from "lodash";
import { IRegisterForm } from "@/app/components/register-form/register-form.props";

function createRegisterApi(initial: RegisterUser | {}) {
  
  // stores 
  const $url = createStore<string>('https://test-api.itrum.ru/api/auth/users/');
  const $response = createStore<{}>({});
  const $responsePending = createStore<boolean>(false);
  // events
  
  // requests

  const createRegisterMutation = createMutation(
    {
    handler: async (user: User) => {
       const response = await fetch($url.defaultState, {
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

  $response.on(createRegisterMutation.finished.success, (_, response) => response.result)
  $responsePending.on(createRegisterMutation.$pending, (_, pending) => pending);

  return {
    createRegisterMutation,
    $response,
    $responsePending,
  }

}

export const RegisterApi = createRegisterApi({});