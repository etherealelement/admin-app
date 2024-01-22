import { IUser } from "@/app/components/dashboard/dashboard-users/dashboard-users.props";
import {action, makeAutoObservable, observable, runInAction} from "mobx";

class Users {
  users: IUser[] = []

  constructor() {
    makeAutoObservable(this, {
      users: observable,
      fetchUsers: action,
    })
  }

  async fetchUsers() {
    if(this.users.length === 0) {
      try {
        const response = await fetch("https://test-api.itrum.ru/api/auth/users/", {
          headers: {
            'accept': 'application/json',
            'Authorization': 'Token ecd686d984219dc8ef50f6ea8dc41793228b7f6c',
          }
        });
        const data = await response.json();
        runInAction(() => this.users = data.results)
      } catch(e) {
        console.log(e);
      }
    }
  }

  async deleteProducts(id: string) {
    try {
      const response = await fetch(`https://test-api.itrum.ru/api/auth/users/${id}/`)
      const data = await response.json();
      console.log(data);
    }catch(e) {
      console.log(e);
    }
  }

  async addProducts(data: IUser) {
    try {
      const res = await fetch("https://test-api.itrum.ru/api/auth/users/", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
    console.log(res);
    } catch(e) {

    }
  }


}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Users();