import log from 'loglevel'
import { ENVIRONMENT, MATOMO_LOGGING } from './environment'

if (!MATOMO_LOGGING) {
  // silence log for running tests
  log.setLevel('silent')
} else {
  log.setLevel(ENVIRONMENT !== 'dev' ? 'silent' : 'trace')
}

export default log
