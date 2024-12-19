import { account } from '../lib/appwrite'

const Dashboard = () => {
  return (
    <div>
      <button onClick={async () => {await account.deleteSession('current')}}>LOGOUT</button>
    </div>
  )
}

export default Dashboard
