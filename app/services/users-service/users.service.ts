import {IUser} from "@/app/services/users-service/user.interface";
import { createStore} from "effector";
import {createQuery} from "@farfetched/core";

function createUsersDashboardApi(initial: IUser[]) {
  // stores
  const $users = createStore<IUser[]>(initial)
  // events

  // requests
  const fetchUsersQuery = createQuery({
    handler: async () => {
      const response = await fetch('https://test-api.itrum.ru/api/auth/users/', {
          headers: {
            "content-type": "application/json",
            'Authorization': 'Token ecd686d984219dc8ef50f6ea8dc41793228b7f6c',
          }
      })
      return response.json();
    }
  })

  fetchUsersQuery.start()
  // effects

  // samples

  return {
    fetchUsersQuery,
    $users,
  }

}

export const usersDashboardApi = createUsersDashboardApi([]);