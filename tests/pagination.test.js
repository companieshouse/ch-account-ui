import generateEllipsisBreaks from '../services/pagination'

describe('generate ellipsis breaks', () => {
  test('should return isQualifiedForEllipsis false when pages is empty', () => {
    const response = generateEllipsisBreaks([], 0)
    expect(response.isQualifiedForEllipsis).toBeFalsy()
  })

  test('should return displayedPages as empty when pages is empty', () => {
    const response = generateEllipsisBreaks([], 0)
    expect(response.displayedPages).toEqual([])
  })

  test('should return pageEllipsis as empty when pages is empty', () => {
    const response = generateEllipsisBreaks([], 0)
    expect(response.pageEllipsis).toEqual([])
  })

  test('should return pageEllipsis as empty when pages is less 16', () => {
    const response = generateEllipsisBreaks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)
    expect(response.pageEllipsis).toEqual([])
  })

  test('should return pageEllipsis as empty, the length of displayed pages is the same as the length of pages, when pages is less 16', () => {
    const response = generateEllipsisBreaks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)
    expect(response.pageEllipsis).toEqual([])
    expect(response.displayedPages.length).toEqual(10)
  })

  test('should return pageEllipsis and  displayed pages, when pages is greater 16', () => {
    const response = generateEllipsisBreaks(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      1
    )
    expect(response.isQualifiedForEllipsis).toBeTruthy()
    expect(response.pageEllipsis.length).toEqual(1)
    expect(response.displayedPages.length).toEqual(3)
  })
})
