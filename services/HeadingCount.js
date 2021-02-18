class HeadingCount {
  constructor () {
    this.count = 0
  }

  use () {
    if (this.count > 50) return
    this.count++
  }

  reset () {
    this.count = 0
  }
}

export default HeadingCount
