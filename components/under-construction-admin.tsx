import React from 'react'
import Sidebar from './sidebar'
import UnderConstruction from './under-construction'

const UnderConstructionAdmin = () => {
  return (
    <div>
        <div className="relative xl:flex xl:h-screen">
            <div className="fixed bottom-0 w-full xl:static xl:pt-20 xl:w-64 xl:px-4 xl:py-0 xl:m-0 xl:bg-transparent">
                <Sidebar />
            </div>
            <div className="flex-1 relative bg-neutral-100 -z-10">
                <UnderConstruction />
            </div>
        </div>
    </div>
  )
}

export default UnderConstructionAdmin