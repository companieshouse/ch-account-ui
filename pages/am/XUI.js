import { useRouter } from 'next/router'
import { serialize } from '../../services/queryString'
import {
  FORGEROCK_TREE_FMP,
  FORGEROCK_TREE_FMP_VERIFY,
  FORGEROCK_TREE_REGISTER_VERIFY
} from '../../services/environment'

/**
 Handler that accepts url query params and routes to the correct page accordingly.
 This page gets loaded when a user clicks a link from an email that they've been
 sent from our API. The idea here is to take the params / query that the URL contains
 and correctly route the user to the page that handles what the link was for. For
 instance, when the user requests a password reset, they get sent an email with a
 link. That link goes to /XUI?blahBlahBlah and includes token they need to validate
 their password reset. As you can see below, we redirect them to
 /account/register/verify with the query params following the redirect as well.

 If you want to handle links and redirect, here is the place to put that logic!
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
          return null

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
