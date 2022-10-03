import log from '../services/log'
function Error ({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  log.debug('Error - RES - ERR', res, err)
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  log.debug('Error - Status Code: ', statusCode)
  return { statusCode }
}

export default Error
