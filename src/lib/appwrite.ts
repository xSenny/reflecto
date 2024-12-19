import { Client, Account, OAuthProvider, Databases } from "appwrite";

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('675be49f0035567c3580')

export const account = new Account(client)
export { ID } from 'appwrite'


export const loginOauth = () => {
  account.createOAuth2Token(OAuthProvider.Google, 'http://localhost:5173/redirect', 'http://localhost:5173/error')
}

const database = new Databases(client)

export const session = async () => await account.getSession('current')

export const checkSession = async () => {
  try {
    const s = await account.getSession('current');
    console.log("Session:", s);
    return s;
  } catch (error) {
    console.error("No active session found:", error);
    throw error;
  }
};


export const saveAccount = async () => {
  const s = await checkSession();
  
  try {
    await database.getDocument('database', 'users', s.userId);
  } catch {
    const a = await account.get()
    await database.createDocument('database', 'users', s.userId, {
      name: a.name,
      email: a.email,
      recovery: ''
    },
    [`read("any")`])
  
  }
}