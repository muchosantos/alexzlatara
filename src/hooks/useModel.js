'use client'
import { ModelsContext } from './../context/models'
import { useCallback, useEffect, useContext } from 'react'

const useModel = (sectionID) => {
  const { registerModel, unregisterModel, getModelByName } =
    useContext(ModelsContext)

  useEffect(() => {
    return () => unregisterModel(sectionID)
  }, [sectionID, unregisterModel])

  const getModel = useCallback(() => {
    getModelByName(sectionID)
  }, [getModelByName, sectionID])

  return { registerModel, getModel }
}

export default useModel
