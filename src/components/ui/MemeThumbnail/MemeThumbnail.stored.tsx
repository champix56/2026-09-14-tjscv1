import React from 'react'
import Mt from './MemeThumbnail'
import { useSelector } from 'react-redux'
import type { RootState } from '../../../store/store'
type Props = {}

const MemeThumbnail = (props: Props) => {
    const ressources=useSelector((s:RootState)=>s.ressources)
  return (
    <Mt {...props} {...ressources}/>
  )
}

export default MemeThumbnail