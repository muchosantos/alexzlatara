'use client'
import Nav from './../custom/Nav'
import { useMenuContext } from '@/context/menus'
import FilterMenu from '../custom/FilterMenu'
import Overlay from '../custom/Overlay'
import { useEffect } from 'react'
import SearchMenu from '../custom/SearchMenu'
import CartMenu from '../custom/CartMenu'
import { AnimatePresence } from 'framer-motion'
import Menu from '../custom/Menu'

const Main = ({ children, navBg, light }) => {
  const {
    openFilter,
    setOpenFilter,
    openSearch,
    setOpenSearch,
    openCart,
    setOpenCart,
    openMenu,
    setOpenMenu,
  } = useMenuContext()

  const handleTouchMove = (event) => {
    if (openFilter || openSearch || openCart || openMenu) {
      event.preventDefault()
    }
  }

  useEffect(() => {
    const isAnyOpen = openFilter || openSearch || openCart || openMenu
    if (isAnyOpen) {
      const width = document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.width = `${width}px`
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      })
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
      document.removeEventListener('touchmove', handleTouchMove)
    }

    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [openFilter, openSearch, openCart, openMenu])

  return (
    <div>
      <Nav navBg={navBg} light={light} />
      {children}

      <AnimatePresence>
        {openFilter && (
          <>
            <Overlay
              key='overlay-filter'
              setOpen={() => setOpenFilter(false)}
            />
            <FilterMenu
              key='filter-menu'
              setOpen={() => setOpenFilter(false)}
            />
          </>
        )}

        {openSearch && (
          <>
            <Overlay
              key='overlay-search'
              setOpen={() => setOpenSearch(false)}
            />
            <SearchMenu
              key='search-menu'
              setOpen={() => setOpenSearch(false)}
            />
          </>
        )}

        {openCart && (
          <>
            <Overlay key='overlay-cart' setOpen={() => setOpenCart(false)} />
            <CartMenu key='cart-menu' setOpen={() => setOpenCart(false)} />
          </>
        )}

        {openMenu && <Menu key='menu' setOpen={() => setOpenMenu(false)} />}
      </AnimatePresence>
    </div>
  )
}

export default Main
