const errorMessages = {
  401: 'Unauthorized: Invalid API key,  You must be granted a valid key.'
}

const errorMessageConverter = (errorMessage: string) => {
  const msg = Object.entries(errorMessages).filter((error) => {
    if (errorMessage.includes(error[0])) {
      console.log(error[1])
      return error[1]
    }
  })
  if (msg) return msg[0][1]
  return errorMessage
}

export default errorMessageConverter