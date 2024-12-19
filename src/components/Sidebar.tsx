import { CiSettings } from 'react-icons/ci'
import { HiOutlineTemplate } from 'react-icons/hi'
import { IoMdJournal } from 'react-icons/io'
const Sidebar = ({ page }: { page: 'journal' | 'templates' | 'settings' }) => {
  return (
    <div className="h-full fixed left-0 top-0 w-[285px] bg-[#181C22] flex flex-col items-center pt-[100px] text-center">
      <a href="/" className="text-[32px] mb-[75px]">Reflecto</a>
      <div className="flex flex-col gap-[35px] w-full">
        <a href="/journal" className={`${page === 'journal' && 'text-accent'} text-center w-full justify-center text-[20px] flex gap-[7px] items-center`}> <IoMdJournal /> Journal</a>
        <a href="/templates" className={`${page === 'templates' && 'text-accent'} text-center w-full justify-center text-[20px] flex gap-[7px] items-center`}> <HiOutlineTemplate /> Templates</a>
        <a href="/settings" className={`${page === 'settings' && 'text-accent'} text-center w-full justify-center text-[20px] flex gap-[7px] items-center`}> <CiSettings /> Settings</a>
      </div>
    </div>
  )
}

export default Sidebar
