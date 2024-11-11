'use client'

import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export const MenuWrapper = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <MenuContext.Provider
      value={{
        openFilter,
        setOpenFilter,
        openSearch,
        setOpenSearch,
        openCart,
        setOpenCart,
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuContext = () => useContext(MenuContext)
