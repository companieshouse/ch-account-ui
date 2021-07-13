import log from 'loglevel'
import { ENVIRONMENT } from './environment'

log.setLevel(ENVIRONMENT !== 'dev' ? 'silent' : 'trace')

export default log
