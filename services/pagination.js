const generateEllipsisBreaks = (pages, currentPage) => {
  let left = []
  let right = []
  let displayedPages = pages
  left = pages?.filter((x) => x < currentPage + 2)
  let pageEllipsis =
    currentPage + 2 !== pages?.length
      ? pages?.filter((x) => x === currentPage + 2)
      : []
  right = pages?.filter((x) => x >= pages[pages.length - 1])
  if (left?.length > 5) {
    pageEllipsis.unshift(2)
    left.splice(1, left.length - 4)
    right.unshift(pages[pages.length - 2], pages[pages.length - 3])
  }
  if (pages?.length > 16) {
    displayedPages = [...left, ...right]
  } else {
    pageEllipsis = []
  }
  return {
    isQualifiedForEllipsis: pages?.length > 16,
    pageEllipsis,
    displayedPages: [...new Set(displayedPages)]
  }
}

export default generateEllipsisBreaks
