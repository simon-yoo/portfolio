import { useRef, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_yd268pz',
          'template_k5im4a8',
          form.current,
          'fYRG8iBBszp5UxxcS'
        )
        .then(
          (result) => {
            console.log(result.text)
            console.log('message sent')

            // Reset the form fields
            if (form.current) {
              form.current.reset()
            }

            // Show an alert
            // alert("Email sent successfully!");
          },
          (error) => {
            console.log(error.text)
            alert('Email sending failed.')
          }
        )
      navigate('/thanks')
    }
  }

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>
          Please contact me directly at yoosghn0@gmail.com ro through this form.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="contact-img" src="/images/Y.png" alt="" />
      </div>
      <div className="form-container">
        <form onSubmit={sendEmail} ref={form} className="form">
          <label htmlFor="name"></label>
          <input
            className="form-name"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          />
          <label htmlFor="email"></label>
          <input
            className="form-email"
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <label htmlFor="msg"></label>
          <textarea
            className="form-msg"
            name="msg"
            id="msg"
            placeholder="Your message"
          />
          <div className="button">
            <button type="submit" className="button-send">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
