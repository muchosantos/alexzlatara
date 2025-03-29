'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import useModel from './../../hooks/useModel'

const ModelSection = ({ sectionID, overlayNode, image, ...props }) => {
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
  }, [sectionRef, sectionID, overlayNode, registerModel])

  return (
    <section {...props} ref={sectionRef}>
      <Image
        src={image}
        alt={'Alex Zlatara'}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        width={5000}
        height={5000}
      />
    </section>
  )
}

export default ModelSection
