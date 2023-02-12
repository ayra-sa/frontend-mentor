import React from 'react'

const Homepage = () => {
  return (
    <section className='min-h-screen bg-[url("/images/bg-home-mobile.jpg")] sm:bg-[url("/images/bg-home-tablet.jpg")] lg:bg-[url("/images/bg-home.jpg")] bg-cover bg-center bg-no-repeat pt-28 sm:pt-52 pb-8 sm:pb-20 text-center lg:text-left text-blue lg:flex lg:flex-col lg:place-content-center'>
      <div className="container md:mx-auto flex flex-col lg:flex-row lg:items-end gap-y-5 sm:gap-40 justify-between px-10 sm:px-40 lg:px-14">
        <div className='pb-20 md:pb-10 lg:w-1/2'>
          <h5 className='heading5'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='heading1'>SPACE</h1>
          <p className='body-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <button className='w-[9.375rem] h-[9.375rem] sm:w-60 sm:h-60 lg:w-[17rem] lg:h-[17rem] bg-white rounded-full mx-auto text-black uppercase text-xl sm:text-[2rem] tracking-wider'>
          explore
        </button>
      </div>
    </section>
  )
}

export default Homepage