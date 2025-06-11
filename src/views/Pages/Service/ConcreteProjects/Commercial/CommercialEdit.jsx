import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const CommercialEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [initialData, setInitialData] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm()

  // Fetch existing data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:5000/commercial`)
        const data = response.data[0]

        setInitialData(data)
        console.log(data)

        // Set form values with existing data
        setValue('herotitle', data.herotitle)
        setValue('title', data.title)
        setValue('sub_title', data.sub_title)
        setValue('para', data.para)
        setValue('video_link', data.video_link)
        setValue('btn_text', data.btn_text)
        setValue('btn_link', data.btn_link)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      const formData = new FormData()

      // Only append hero image if a new file is selected
      if (data.heroimg && data.heroimg[0]) {
        formData.append('heroimg', data.heroimg[0])
      }

      // Append all other form fields
      formData.append('herotitle', data.herotitle)
      formData.append('title', data.title)
      formData.append('sub_title', data.sub_title)
      formData.append('para', data.para)
      formData.append('video_link', data.video_link)
      formData.append('btn_text', data.btn_text)
      formData.append('btn_link', data.btn_link)

      const response = await axios.put(`http://localhost:5000/commercial/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      console.log(response.data, 'Updated data')
      alert('Data successfully updated')
      navigate('/theme/commercial/list')
    } catch (error) {
      console.error('Error updating data:', error)
      alert('Error updating data: ' + (error.response?.data?.message || error.message))
    }
  }

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <h1 className="mb-5">Edit Commercial</h1>
      <div className="row">
        <div className="col-lg-12">
          <form className="form-control shadow py-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="heroimg" className="form-label">
                Hero Image
              </label>
              {/* {initialData?.heroimg && (
                <div className="mb-2">
                  <img
                    src={`${initialData.heroimg}`}
                    alt="Current hero"
                    className="img-thumbnail"
                    style={{ maxWidth: '200px', maxHeight: '150px' }}
                  />
                  <small className="d-block text-muted mt-1">
                    Current image (leave empty to keep this image)
                  </small>
                </div>
              )} */}
              <input
                type="file"
                className="form-control"
                id="heroimg"
                accept="image/*"
                {...register('heroimg')}
              />
              <small className="text-muted">
                Select a new image only if you want to replace the current one
              </small>
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

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/theme/slab/list')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommercialEdit
