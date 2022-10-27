import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    
    // Displays a success toast when form submission is successful//

    const toastifySuccess = () => {
      toast('', {
        position: 'bottom-left',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
      });
    };
    
    const onSubmit = async (data) => {

      // Destructure data object //

      const { name, email, subject, message } = data;

      try {
        const templateParams = {
          name,
          email,
          subject,
          message
        };
  
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        );
  
        reset();
        toastifySuccess();

      } 
      catch (e) {
      console.log(e);
      }
    };
  
    return (
      <div className='ContactForm'>
      <div className='container'>
      <div className='row'>
      <div className='col-6 text-center'>
      <div className='contactForm'>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>

                  { // form 1 //
                  }

                  <div className='row formRow'>
                    <div className='col-3'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: { value: true, message: 'Enter name here' },
                          maxLength: {
                            value: 20,
                            message: 'Please use 20 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      > 
                      </input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-3'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Enter Email'
                      >
                      </input>
                      {errors.email && (
                        <span className='errorMessage'>Enter a valid email</span>
                      )}
                    </div>
                  </div>

                  { // form 2 //
                  }

                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 50,
                            message: 'Limit of 50 characters'
                          }
                        })
                        }
                        className='form-control formInput'
                        placeholder='Subject'
                      >
                      </input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>

                  {// form 3 // 
                  }

                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                          required: true
                        })
                        }
                        className='form-control formInput'
                        placeholder='Message'
                      >
                      </textarea>
                      {errors.message && <span className='errorMessage'>Enter a Message
                      </span>}
                    </div>
                  </div>
                  <button className='btn btn-secondary btn-md btn-block' type='submit'>Submit</button>
                </form>
              </div>

              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;