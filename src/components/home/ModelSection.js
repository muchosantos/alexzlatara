'use client'
import React, { useEffect, useRef } from 'react'
import useModel from './../../hooks/useModel'

const ModelSection = ({ sectionID, overlayNode, ...props }) => {
  const sectionRef = useRef(null)

  const { registerModel } = useModel()

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        sectionRef,
        sectionID,
        overlayNode,
      })
    }
  }, [sectionRef, sectionID, overlayNode])

  return <div {...props} ref={sectionRef}></div>
}

export default ModelSection
