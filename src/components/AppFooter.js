import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="me-1 text-uppercase">Created by Kennedy Concrete</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
