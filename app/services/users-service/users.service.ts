import {IUser} from "@/app/services/users-service/user.interface";
import { createStore} from "effector";
import {createMutation, createQuery} from "@farfetched/core";

function createUsersDashboardApi(initial: IUser[]) {
  // stores
  const $users = createStore<IUser[]>(initial);
  const $url = createStore<string>('https://test-api.itrum.ru/api/auth/users/')
  // events

  // requests
  const fetchUsersQuery = createQuery({
    handler: async () => {
      const response = await fetch($url.defaultState, {
          headers: {
            "content-type": "application/json",
            'Authorization': 'Token ecd686d984219dc8ef50f6ea8dc41793228b7f6c',
          }
      })
      return response.json();
    }
  })
  fetchUsersQuery.start();
  //mutations

  const createAddUserMutation = createMutation({
   handler: async (user: IUser) => {
    const response = await fetch($url.defaultState,{
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        'Authorization': 'Token ecd686d984219dc8ef50f6ea8dc41793228b7f6c',
      }
    })
   }
  })


  // effects

  // samples

  return {
    fetchUsersQuery,
    $users,
    createAddUserMutation
  }

}

export const usersDashboardApi = createUsersDashboardApi([]);