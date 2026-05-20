import React from 'react'
import Notifications from '../Components/homepage/Notifications'
import ActiveUsers from '../Components/homepage/ActiveUsers'
import Events from '../Components/homepage/Events'
import RecentActivity from '../Components/homepage/RecentActivity'

const HomePage = () => {
  return (
    <div className='flex  flex-col gap-5'>

      {/* Notifications */}
      <Notifications />

      {/* Cards */}
      <div className="grid grid-cols-2 gap-5">

        {/* ActiveUsers */}
        <ActiveUsers />

        {/* Events */}
        <Events />
      </div>

      {/* RecentActivity */}
      <RecentActivity />
    </div>
  )
}

export default HomePage