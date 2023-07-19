export const setupWindowMock = () => {
  const headerMock = jest.fn().mockReturnValue({ init: jest.fn() });
  const originalHeader = typeof window !== 'undefined' ? window.GOVUKFrontend?.Header : null;


  beforeAll(() => {
    if (typeof window !== 'undefined') {
      window.GOVUKFrontend = { Header: headerMock }
    }
  })

  afterAll(() => {
    window.GOVUKFrontend = null
  })
}
