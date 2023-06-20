const aws = require('aws-sdk')
const ssm = new aws.SSM({
  region: 'us-east-1'
})

exports.handler = async (event, context, callback) => {
  try {
    const { request } = event.Records[0].cf
    const { headers, uri } = request

    const username = 'ch-account-ui'
    const passwordParams = {
      Name: `${context.functionName.replace('us-east-1.', '')}-password`,
      WithDecryption: true
    }

    const secret = await ssm.getParameter(passwordParams).promise()
    const password = secret.Parameter.Value

    const basicAuthValue = Buffer.from(username + ':' + password).toString(
      'base64'
    )
    const basicAuthHeader = `Basic ${basicAuthValue}`

    if (
      typeof headers.authorization == 'undefined' ||
      headers.authorization[0].value != basicAuthHeader
    ) {
      const body = 'Unauthorized'
      const response = {
        status: '401',
        statusDescription: 'Unauthorized',
        body: body,
        headers: {
          'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
        }
      }
      return callback(null, response)
    }

    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
      request.uri += 'index.html'
    }
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
      request.uri += '/index.html'
    }

    callback(null, request)
  } catch (error) {
    console.error(error)
    callback(error)
  }
}
