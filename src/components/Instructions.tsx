
const Instructions = () => {
  return (
    <section className="flex flex-col gap-[50px]" id="instructions">
      <h3 className="max-w-[365px] text-[36px] font-bold">How do you secure your <span className="text-accent">Journal</span></h3>
      <div className="flex gap-[41px] justify-between ">
        <div className="max-w-[215px]">
          <h1 className="text-primary text-[64px] font-bold mb-[10px]">01</h1>
          <h3 className="text-[20px] font-bold">Begin with Trust</h3>
          <p>Log in seamlessly with your Google account.</p>
        </div>
        <div className="max-w-[215px]">
          <h1 className="text-primary text-[64px] font-bold mb-[10px]">02</h1>
          <h3 className="text-[20px] font-bold">Guard Your Thoughts</h3>
          <p>Create a password to protect and decrypt your journal.</p>
        </div>
        <div className="max-w-[215px]">
          <h1 className="text-primary text-[64px] font-bold mb-[10px]">03</h1>
          <h3 className="text-[20px] font-bold">Whisper a Reminder</h3>
          <p>Set a gentle hint for password recovery peace.</p>
        </div>
        <div className="max-w-[215px]">
          <h1 className="text-primary text-[64px] font-bold mb-[10px]">04</h1>
          <h3 className="text-[20px] font-bold">Evolve Your Security</h3>
          <p>Change your password anytime to stay secure.</p>
        </div>
      </div>
    </section>
  )
}

export default Instructions
