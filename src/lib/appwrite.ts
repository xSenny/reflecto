import { Client, Account, OAuthProvider } from "appwrite";

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('675be49f0035567c3580')

export const account = new Account(client)
export { ID } from 'appwrite'


export const loginOauth = () => {
  account.createOAuth2Session(OAuthProvider.Google, 'http://localhost:5173/', 'http://localhost:5173/error')
}

export const session = async () => await account.getSession('current')