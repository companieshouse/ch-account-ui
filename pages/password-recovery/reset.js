import HeadingCount from '../../services/HeadingCount'

const FmpReset = () => {
  const headingCount = new HeadingCount()

  React.useEffect(() => {
    headingCount.reset()
  })
  return null
}

export default FmpReset
