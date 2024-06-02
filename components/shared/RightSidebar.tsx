import React from 'react'
import {currentUser} from '@clerk/nextjs/server'

async function RightSidebar() {
  const user = await currentUser()

  if (!user) return <div>Not signed in</div>

  return <div>Hello {user?.firstName}</div>
}

export default RightSidebar
