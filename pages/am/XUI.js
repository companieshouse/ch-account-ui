import { useRouter } from 'next/router'

/**
 Handler that accepts url query params and routes to the correct page accordingly.
 **/
const XUI = () => {
  const router = useRouter()
  const { authIndexType, authIndexValue, service, token } = router.query

  switch (service) {
    case 'CHVerifyReg':
      router.replace(`/account/register/verify/?token=${token}&service=${service}`)
      break

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
