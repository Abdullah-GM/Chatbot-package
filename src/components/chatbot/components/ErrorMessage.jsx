import '../Chatbot.css'

const ErrorMessage = ({ errorText = null }) => {
  return (
    <p className='error-msg-wrp'>
      {errorText || (
        <>
          Something went wrong. If the issue persists please contact us through
          our help center at{' '}
          <a href='mailto:support@talkk.ai'>support@talkk.ai</a>.
        </>
      )}
    </p>
  )
}

export default ErrorMessage
