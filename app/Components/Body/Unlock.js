import React from 'react'

const Unlock = () => {
  return (
    <div className="flex flex-wrap px-[10.23px] md:px-[100.23px]  my-[11.27px] justify-evenly items-center">
      <img
        src="/unlock.svg"
        alt="hello"
        className="w-[307.66px] h-[301.4px] object-cover"
      />
      <div className='flex-col w-[460.1px]'>
        <p className='font-inter text-[25.06px] font-semibold'>
        The unseen of spending three years at Pixelgrade
        </p>
        <p className='font-inter text-[9.74px] my-[11.6px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className='py-[9.74px] px-[22.27px] bg-[#4CAF4F] text-white rounded-sm font-medium text-[11.14px] font-inter'>Learn More</button>
      </div>
    </div>
  );
}

export default Unlock
