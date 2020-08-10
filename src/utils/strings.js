export function joinSentence(array) {
  return array.reduce((text, value, i, array) => (
    text + (i < array.length - 1 ? ', ' : ' and ') + value)
  )
}

export function capitalize(s) {
  if (typeof s !== 'string') { return '' }
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export function isCompetitive(rating) {
  return (rating === "TOSS-UP" ||
      rating.startsWith("LEAN")
  )
}

export function padCode(number) {
  return String(number).padStart(2, '0')
}

export function parseName(name) {
  // tries to naively convert LAST, FIRST MIDDLE
  // to First M Last

  let parts = name.split(',')
  let last = parts[0].trim()
  let [first, middle = ''] = parts[1].trim().split(' ')
  return `${capitalize(first)} ${middle.slice(0,1)} ${capitalize(last)}`
}