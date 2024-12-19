import CreateEntryButton from '../components/CreateEntryButton';
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  function getDayOfWeekAbbreviation(date: Date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }
  const journalData = [
    {
      month: 'December 2024',
      data: [
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
      ]
    },
    {
      month: 'September 2024',
      data: [
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
      ]
    },
    {
      month: 'Octomber 2024',
      data: [
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
        {
          date: new Date(),
          encryptedText: 'asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0asdasdo32iu4239iowkdsd0',
        },
      ]
    }
  ]
  return (
    <div className='relative text-text balsamiq-sans-regular '>
      <Sidebar page='journal'/>
      <div className='ml-[285px] bgc w-[calc(100%-285px)] min-h-screen p-[50px]'>
        <h2 className='text-[48px] mb-[20px]'>Journal</h2>
        <div className='flex flex-col gap-[25px]'>
          {journalData.map(data => {
            return (
              <div className='flex flex-col gap-[20px]'>
                {data.month}
                {data.data.map(entry => (
                  <a href="/" className='w-full rounded-[8px] pl-[25px] pt-[25px] pr-[50px] pb-[30px] flex gap-[25px] bg-[#21262D]'>
                    <div className='bg-[#262E38] rounded-[8px] size-[50px] flex flex-col justify-center items-center'>
                      <p className='text-[#858585]'>{getDayOfWeekAbbreviation(entry.date)}</p>
                      <p>{entry.date.getDate()}</p>
                    </div>
                    <p className='max-w-[90%] break-words'>{entry.encryptedText}</p>
                  </a>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <CreateEntryButton />
    </div>
  )
}

export default Dashboard
