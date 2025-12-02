import config from "../config/config"
import {Client,Account,ID} from "appwrite"
export class AuthService
{
    client=new Client()
    account;
    constructor()
    {
        this.client.setEndpoint(config.projectEndpoint).setProject(config.projectId);
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name})
    {
        try {
           const userAccount=await this.account.create(ID.unique(),email,password,name)
           if(userAccount)
           {
            return this.login({email,password})
           }else{
            return userAccount
           }
        } catch (error) {
            throw error
        }
    }
    async login({email,password})
    {
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        } 
    }
    async logout()
    {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Error",error);
        }
    }
    async getCurrentUser()
    {
        try {
           return await this.account.get()
        } catch (error) {
            console.log("Error",error);
            return null;
        }
    }
}
export const authService=new AuthService();
