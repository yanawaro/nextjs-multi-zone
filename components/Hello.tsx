import React from 'react'
import { libtest } from '../libs/libs'

type a = {
  b: string
}

export function Hello() {
  return <div>{libtest()}</div>
}
