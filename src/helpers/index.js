export const capitalizeFirstLetter = (str) => {
  if (str.length === 0) return '' // Ako je string prazan, vrati prazan string

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
