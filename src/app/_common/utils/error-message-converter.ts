const errorMessages = {
  401: 'Unauthorized: Invalid API key,  You must be granted a valid key.'
}

const errorMessageConverter = (errorMessage: string) => {
  console.log(errorMessage)
  const msg = Object.entries(errorMessages).filter((error) => {
    if (errorMessage.includes(error[0])) {
      return error[1]
    }
  })
  console.log(msg)
  if (msg.length !== 0) return msg[0][1]
  return errorMessage
}

export default errorMessageConverter