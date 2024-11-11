'use client'
import { createContext, useContext } from 'react'

const ModelsContext = createContext({
  wrapperRef: null,
  registeredModels: [],
  registerModel: () => {},
  unregisterModel: () => {},
  getModelByName: () => null,
})

const useMyContext = () => {
  return useContext(ModelsContext)
}

export { ModelsContext, useMyContext }
