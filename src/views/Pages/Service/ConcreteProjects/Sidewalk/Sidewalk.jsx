import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Sidewalk = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()

      // Append all form fields with correct API field names
      formData.append('heroimg', data.heroimg[0]) // file object
      formData.append('herotitle', data.herotitle)
      formData.append('title', data.title)
      formData.append('sub_title', data.sub_title)
      formData.append('para', data.para)
      formData.append('video_link', data.video_link)
      formData.append('btn_text', data.btn_text)
      formData.append('btn_link', data.btn_link)

      const response = await axios.post('http://localhost:5000/sidewalk', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log(response.data, 'This is data')
      alert('Data successfully added')
      reset()
      navigate('/theme/sidewalk/list')
    } catch (error) {
      console.error('Error submitting data:', error)
      alert('Error submitting data: ' + (error.response?.data?.message || error.message))
    }
  }

  return (
    <div>
      <div className="container my-5">
        <h1 className="mb-5">SideWalk</h1>
        <div className="row">
          <div className="col-lg-12">
            <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="heroimg" className="form-label">
                  Hero Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="heroimg"
                  accept="image/*"
                  {...register('heroimg', { required: true })}
                />
                {errors.heroimg && <span className="text-danger">Hero Image is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="herotitle" className="form-label">
                  Hero Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="herotitle"
                  placeholder="Enter Hero Title"
                  {...register('herotitle', { required: true })}
                />
                {errors.herotitle && <span className="text-danger">Hero Title is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter Title"
                  {...register('title', { required: true })}
                />
                {errors.title && <span className="text-danger">Title is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="sub_title" className="form-label">
                  Sub Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="sub_title"
                  placeholder="Enter Sub Title"
                  {...register('sub_title', { required: true })}
                />
                {errors.sub_title && <span className="text-danger">Sub Title is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="para" className="form-label">
                  Paragraph
                </label>
                <textarea
                  className="form-control"
                  id="para"
                  rows="4"
                  placeholder="Enter paragraph content"
                  {...register('para', { required: true })}
                />
                {errors.para && <span className="text-danger">Paragraph is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="video_link" className="form-label">
                  Video Link
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="video_link"
                  placeholder="Enter Video URL"
                  {...register('video_link', { required: true })}
                />
                {errors.video_link && <span className="text-danger">Video Link is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="btn_text" className="form-label">
                  Button Text
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="btn_text"
                  placeholder="Enter Button Text"
                  {...register('btn_text', { required: true })}
                />
                {errors.btn_text && <span className="text-danger">Button Text is required</span>}
              </div>

              <div className="mb-3">
                <label htmlFor="btn_link" className="form-label">
                  Button Path
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="btn_link"
                  placeholder="Enter Button Link (e.g., #, /contact)"
                  {...register('btn_link', { required: true })}
                />
                {errors.btn_link && <span className="text-danger">Button Link is required</span>}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidewalk
