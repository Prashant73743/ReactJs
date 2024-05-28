import config from '../config.js'
import { Client, Account, ID } from "appwrite";

export class AuthService{
    Client = new Client()
    account;
    
    constructor() {
        this.Client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.Client);   
    }

    // creating account 
    async createAccount({email, password, name}){
    try {
       const userAccount = await this.account.create(ID.unique(), email, password, name) 
    if (userAccount) {
        return this.login({email, password});
    } else {
        return userAccount
    }
    } catch (error) {
        throw error;
    }
    }

    // for login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    //getting the user already logged in
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
            //  console.log("got error ", error)
        }
        return null 
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
            // for single delete return await this.account.deletesessoin('[SESSION_ID]')
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService