import log from 'loglevel'
import { ENVIRONMENT, NODE_ENV } from './environment'

log.setLevel(ENVIRONMENT === 'dev' && NODE_ENV !== 'test' ? 'trace' : 'silent')

export default log
