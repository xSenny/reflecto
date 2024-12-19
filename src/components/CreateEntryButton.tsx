import { useState } from "react"
import { motion } from "framer-motion"
import { Pen } from "lucide-react"
import { HiOutlineTemplate } from "react-icons/hi"

const CreateEntryButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <motion.a 
        initial={{
          y: 0
        }}
        animate={{
          y: isHovered ? -48 : 0
        }}
        href="/journal/new"
        className="rounded-full size-[40px] border border-primary cursor-pointer flex justify-center items-center fixed bottom-10 right-10">
        <motion.span>
          <Pen className="size-[20px]"/>
        </motion.span>
      </motion.a>
      <motion.a 
        initial={{
          y: 0
        }}
        animate={{
          y: isHovered ? -96 : 0
        }}
        className="rounded-full size-[40px] border border-primary cursor-pointer flex justify-center items-center fixed bottom-10 right-10">
        <motion.span>
          <HiOutlineTemplate className="size-[20px]"/>
        </motion.span>
      </motion.a>
      <motion.div onClick={() => setIsHovered(!isHovered)} className="cursor-pointer rounded-full size-[40px] bg-primary flex justify-center items-center fixed bottom-10 right-10">
        <motion.span animate={{
          rotate: isHovered ? 270 : 0
        }} className="text-[25px]">
          +
        </motion.span>
      </motion.div>
    </>
  )
}

export default CreateEntryButton
