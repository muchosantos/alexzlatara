'use client'

import { ModelsContext } from './../../context/models'
import { useTransform, motion } from 'framer-motion'
import {
  useCallback,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react'

import useWrapperScroll from './../../hooks/useWrapperScroll'

const ModelsWrapper = ({ children }) => {
  const wrapperRef = useRef(null)

  const [registeredModels, setRegisteredModels] = useState([])

  const registerModel = useCallback((model) => {
    setRegisteredModels((state) => [...state, { ...model }])
  }, [])

  const unregisterModel = useCallback((modelName) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      )
    },
    [registeredModels]
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registerModel,
        registeredModels,
        unregisterModel,
        getModelByName,
      }}
    >
      <div className='modelsWrapper' ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((section, i) => (
            <ModelOverlay key={i} section={section}>
              {section.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </div>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper

const OverlaysRoot = ({ children }) => {
  return <div className='overlaysRoot'>{children}</div>
}

const ModelOverlay = ({ children, section }) => {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: section.sectionRef.current?.offsetTop ?? 0,
      offsetHeight: section.sectionRef.current?.offsetHeight ?? 0,
    }
  }, [section.sectionRef])

  const [dimensions, setDimensions] = useState(getSectionDimensions())

  useLayoutEffect(() => {
    const onResize = () => {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  )

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, (v) => (v > 0 ? 'auto' : 'none'))

  return (
    <motion.div className='modelOverlay' style={{ opacity, pointerEvents }}>
      {children}
    </motion.div>
  )
}
