import MemeSvgViewer from '../components/ui/MemeSvgViewer/MemeSvgViewer'
import MemeForm from '../components/functional/MemeForm/MemeForm.lazy'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { clearCurrent, updateCurrent } from '../store/currentSlice'

const Editor = () => {
  const ressources=useSelector((s:RootState)=>s.ressources)
  const params=useParams()
  const loc=useLocation()
  const nav=useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  console.log(params)
  console.log(loc)
  useEffect(() => {
    if(!ressources.isLoaded){return;}
    if(params.id===undefined){
      dispatch(clearCurrent())
    }
    else{
      let foundMeme=ressources.memes.find(m=>m.id===Number(params.id))
      if(!foundMeme){
        nav('/')
      }
      else{
        dispatch(updateCurrent(foundMeme))
      }
    }
  }, [params,ressources,dispatch,nav])

  return (
    <>
        <MemeSvgViewer />
        <MemeForm />
    </>
  )
}

export default Editor