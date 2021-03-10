import { useRouter } from 'next/router'
import { serialize } from '../../services/queryString'
import {
  FORGEROCK_TREE_FMP,
  FORGEROCK_TREE_FMP_VERIFY,
  FORGEROCK_TREE_REGISTER_VERIFY
} from '../../services/environment'

/**
 Handler that accepts url query params and routes to the correct page accordingly.
 **/
const XUI = () => {
  const router = useRouter()
  const { authIndexType, authIndexValue, service } = router.query

  switch (service) {
    case FORGEROCK_TREE_REGISTER_VERIFY:
      router.replace(`/account/register/verify/?${serialize(router.query)}`)
      return null

    case FORGEROCK_TREE_FMP_VERIFY:
      // In this flow, we have to direct the token back to the FORGEROCK_TREE_FMP
      // because in the FR auth trees that have been set up, FORGEROCK_TREE_FMP_VERIFY
      // doesn't actually exist as a tree
      router.replace(`/password-recovery/verify/?${serialize({ ...router.query, service: FORGEROCK_TREE_FMP })}`)
      return null

    default:
      break
  }

  switch (authIndexType) {
    case 'service':
      switch (authIndexValue) {
        case 'Login':
          router.replace('/account/login')
          break

        default:
          break
      }
      break

    default:
      break
  }

  return null
}

export default XUI
