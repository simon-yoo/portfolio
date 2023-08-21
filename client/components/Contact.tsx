import { FormControl } from '@mui/base/FormControl';

function Contact(){
    
    return(
        <div className="contact">
            <div className="contact-header">
            <h1>Contact Me</h1>
            <p>Please contact me directly at yoosghn0@gmail.com ro through this form.</p>
            </div>
            <div className='contact-img-div'>
          <img className="contact-img" src="/client/public/images/Y.png" alt="" />
                  
            </div>
            <div className="form-container">
                <FormControl defaultValue="" required className="form">
                    <label htmlFor="name"></label>
                    <input className="form-name"type="text" name="name" id="name" placeholder="Your name" />
                    <label htmlFor="email"></label>
                    <input className="form-email"type="text" name="email" id="email" placeholder="Your email"/>
                    <label htmlFor="msg"></label>
                    <textarea className="form-msg" name="msg" id="msg" placeholder="Your message" />
                    <div className="button">
                    <button className="button-send">Send</button>
                    </div>
                </FormControl>
            </div>

        </div>
        
    )
}

export default Contact