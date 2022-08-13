import React from 'react'

const CompanyInfo = () => {
  return (
  <div className="flex mt-16 flex-col gap-10">
  <h1 className='text-center text-3xl font-semibold text-primary'>Who we Are ?</h1>
  <div className="flex justify-center">
    <img src="https://sheyhiring.netlify.app/images/job-searching.png" alt="" />
  </div>
  <p className='text-gray-600 text-xl sm:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque delectus doloremque optio placeat. Reprehenderit explicabo est at molestias sequi dignissimos iste aperiam atque, doloremque reiciendis! Enim tempora impedit, labore dolor rerum perferendis, suscipit illum atque fugiat nostrum quibusdam excepturi magnam libero eum mollitia eaque placeat facilis sit accusamus sint! Praesentium.</p>
  <div className="flex items-center justify-center bg-primary text-secondary p-5 flex-col font-semibold gap-5 hover:bg-secondary hover:text-primary">
  <h1 className="text-7xl text-center sm:text-3xl">
          ❝ If opportunity doesn't knock,
        </h1>
    <h1 className="text-7xl text-center sm:text-3xl"> build a door ❞</h1>
  </div>
  <div className="flex gap-5 flex-col">
        <h1 className="text-center text-3xl font-semibold text-primary">
          What we do ?
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          voluptatem ipsam cupiditate inventore dignissimos beatae quos?
          Dolores, deleniti enim error veniam dignissimos ut dolorum laboriosam
          neque impedit! Voluptatibus, quo? Itaque.
        </p>
        <div className="relative">
            <img src="https://images.contentstack.io/v3/assets/blta94287f64af734dc/blt2b473b8907e69f07/6172ae3df13b7e5c89d3f6f9/iStock-631182518_copy.jpg?auto=webp&format=pjpg&quality=80&width=900&height=500&fit=crop" alt="" className="rounded-2xl"/>
            <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-start rounded-2xl">
                 <h1 className="text-white text-7xl sm:text-4xl text-center">Easy and Fast Way For You To Find Your Dream Job</h1>
            </div>
        </div>
      </div>
  </div>
  )
}

export default CompanyInfo