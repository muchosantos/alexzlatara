export const capitalizeFirstLetter = (str) => {
  if (str.length === 0) return '' // Ako je string prazan, vrati prazan string

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const chooseDescription = (collection) => {
  if (collection === 'prstenje') {
    return 'Prstenovi su bezvremeni komad nakita koji se može nositi kao modni detalj ili da označi nešto posebno. Dolaze u različitim stilovima, veličinama i materijalima, uključujući zlato, belo zlato, platinu i dragulje.'
  } else if (collection === 'mindjuse') {
    return 'Minđuše su suptilan i upečatljiv komad nakita koji dodaje lični pečat svakom stilu ili obeležava poseban trenutak. Dolaze u raznim oblicima, dizajnima i materijalima, kao što su zlato, belo zlato, platina, te često uključuju sjajne detalje poput dragog kamenja.'
  } else if (collection === 'burme') {
    return 'Burme su simbol večne ljubavi i posvećenosti, noseći sa sobom posebnu emotivnu vrednost. Dolaze u različitim stilovima i materijalima, poput zlata, belog zlata, platine i mogu biti ukrašene dragim kamenjem, omogućavajući svakom paru da pronađe prsten koji priča njihovu priču.'
  } else if (collection === 'narukvice') {
    return 'Narukvice su elegantan i svestran komad nakita, koji može naglasiti lični stil ili nositi posebno značenje. Dostupne su u različitim dizajnima, od jednostavnih linija do bogato ukrašenih komada, izrađenih od materijala poput zlata, belog zlata, platine i sa ili bez dragog kamenja, pružajući bezbroj mogućnosti za svaki ukus i priliku.'
  } else if (collection === 'ogrlice') {
    return 'Ogrlice su bezvremeni detalj koji može istaknuti eleganciju i nositi ličnu priču. U ponudi su raznovrsni stilovi, od suptilnih lančića do raskošnih komada, izrađeni od materijala poput zlata, belog zlata, platine, često ukrašeni dragim kamenjem. Svaka ogrlica može biti savršen završni dodir ili simbol posebnog trenutka.'
  } else if (collection === 'privesci') {
    return 'Privesci su jedinstveni detalji koji mogu dodati ličnu notu svakom komadu nakita ili preneti posebnu poruku. Dostupni su u raznim oblicima, stilovima i materijalima, poput zlata, belog zlata i platine, često ukrašeni dragim kamenjem. Svaki privesak nosi svoju priču i predstavlja poseban dodir koji osvežava i ističe vaš stil.'
  }
}
