import React from 'react'
import {currentUser} from '@clerk/nextjs/server'

async function RightSidebar() {
  const user = await currentUser()

  if (!user) return <div>Not signed in</div>

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading5-medium text-light-1">
          Suggested Communities
        </h3>

        <div className="mt-7 flex flex-col gap-9"></div>

        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-heading5-medium text-light-1">Similar Minds</h3>
          <div className="mt-7 flex flex-col gap-10"></div>
        </div>
      </div>
    </section>
  )
}

export default RightSidebar
