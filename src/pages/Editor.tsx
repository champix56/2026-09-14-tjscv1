import React from 'react'
import FlexH1RstGrow from '../components/layouts/FlexH1rstGrow/FlexH1rstGrow'
import MemeSVGViewer  from '../components/ui/MemeSvgViewer/MemeSvgViewer'
import MemeForm from '../components/functional/MemeForm/MemeForm.stored'

type Props = {}

const Editor = (props: Props) => {
  return (
    <FlexH1RstGrow>
          <MemeSVGViewer basePath="" />
          <MemeForm
            
          />
        </FlexH1RstGrow>
  )
}

export default Editor