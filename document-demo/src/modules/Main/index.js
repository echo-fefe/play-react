import React from 'react'

import Clock from './Clock'
import Toggle from './Toggle'
import NumberList from './NumberList'
import NameForm from './NameForm'
import Calculator from './Calculator'
import SignUpDialog from './SignUpDialog'
import OuterClickExample from './OuterClickExample'
import BlurExample from './BlurExample'

function Main() {
  return(
    <div>
      <Clock />
      <Toggle />
      <NumberList numbers={[1,2,3,4]} />
      <NameForm />
      <br/>
      <Calculator />
      <SignUpDialog />
      <OuterClickExample />
      <BlurExample />
    </div>
  )
}

export default Main