import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if (confirm('Are you sure you want to add this data?')) {
      try {
        const response = axios.post('http://localhost:5000/instant/', data)
        console.log(response.data, 'Data successfully added')
        reset()
      } catch (error) {
        alert('Error occurred while adding data. Please try again.')
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="mb-5">Instant Section Admin Panel</h1>
        <div className="row">
          <div className="col-lg-12 ">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="subtitle" className="form-label">
                  Subtitle
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.subtitle ? 'is-invalid' : ''}`}
                  id="subtitle"
                  placeholder="Enter Subtitle"
                  {...register('subtitle', { required: 'Subtitle is required' })}
                />
                {errors.subtitle && (
                  <div className="invalid-feedback">{errors.subtitle.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  id="title"
                  placeholder="Enter Title"
                  {...register('title', { required: 'Title is required' })}
                />
                {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  Text Content
                </label>
                <textarea
                  className={`form-control ${errors.text ? 'is-invalid' : ''}`}
                  id="text"
                  rows="4"
                  placeholder="Enter text content"
                  {...register('text', { required: 'Text content is required' })}
                ></textarea>
                {errors.text && <div className="invalid-feedback">{errors.text.message}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="btntext" className="form-label">
                  Button Text
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.btntext ? 'is-invalid' : ''}`}
                  id="btntext"
                  placeholder="Enter Button Text"
                  {...register('btntext', { required: 'Button text is required' })}
                />
                {errors.btntext && <div className="invalid-feedback">{errors.btntext.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
