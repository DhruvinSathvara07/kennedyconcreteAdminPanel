import axios from 'axios'
// import { set } from 'core-js/core/dict'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const PreferredContractorEdit = () => {
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
        const response = await axios.get(`http://localhost:5000/preferredcontractors`)
        const data = response.data[0]

        setInitialData(data)
        console.log(data)

        // Set form values with existing data
        setValue('herotitle', data.herotitle)
        setValue('blacktext', data.blacktext)
        setValue('redtext', data.red)
        setValue('paragraph', data.para)
        setValue('blacktitle', data.blacktitle)
        setValue('redtitle', data.redtitle)
        setValue('firstlinetitle', data.firstlinetitle)
        setValue('firstline', data.firstline)
        setValue('secondlinetitle', data.secondlinetitle)
        setValue('secondline', data.secondline)
        setValue('thirdlinetitle', data.thirdlinetitle)
        setValue('thirdline', data.thirdline)
        setValue('blacktitleone', data.blacktitleone)
        setValue('redtitletwo', data.redtitletwo)
        setValue('lineonetitle', data.line1title)
        setValue('lineone', data.line1)
        setValue('linesecondtitle', data.line2title)
        setValue('linetwo', data.line2)
        setValue('linethirdtitle', data.line3title)
        setValue('linethree', data.line2)
        setValue('blacktextconnect', data.blacktextconnect)
        setValue('redtextconnect', data.redtextconnect)
        setValue('paraone', data.para1)
        setValue('paratwo', data.para2)
        setValue('parathree', data.para3)
        setValue('linetitle', data.line1title)
        setValue('paraone', data.paratwo)
        setValue('projectblacktext', data.projectblacktext)
        setValue('projectparagraph', data.projectpara)
        setValue('getmatchtext', data.getmatchedtext)
        setValue('concreteredtext', data.concreteredtext)
        setValue('paragraphtwo', data.paratwo)
        setValue('videolink', data.video_link)

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

      // Append all form fields to FormData
      formData.append('heroimg', data.heroimg[0]) // file object
      formData.append('herotitle', data.herotitle)
      formData.append('blacktext', data.blacktext)
      formData.append('redtext', data.redtext)
      formData.append('paragraph', data.paragraph)
      formData.append('blacktitle', data.blacktitle)
      formData.append('redtitle', data.redtitle)
      formData.append('firstlinetitle', data.firstlinetitle)
      formData.append('firstline', data.firstline)
      formData.append('secondlinetitle', data.secondlinetitle)
      formData.append('secondline', data.secondline)
      formData.append('thirdlinetitle', data.thirdlinetitle)
      formData.append('thirdline', data.thirdline)
      formData.append('blacktitleone', data.blacktitleone)
      formData.append('redtitletwo', data.redtitletwo)
      formData.append('linetitle', data.linetitle)
      formData.append('lineone', data.lineone)
      formData.append('linesecondtitle', data.linesecondtitle)
      formData.append('linetwo', data.linetwo)
      formData.append('linethirdtitle', data.linethirdtitle)
      formData.append('linethree', data.linethree)
      formData.append('blacktextconnect', data.blacktextconnect)
      formData.append('redtextconnect', data.redtextconnect)
      formData.append('paraone', data.paraone)
      formData.append('projectblacktext', data.projectblacktext)
      formData.append('projectredtext', data.projectredtext)
      formData.append('projectparagraph', data.projectparagraph)
      formData.append('getmatchtext', data.getmatchtext)
      formData.append('concreteredtext', data.concreteredtext)
      formData.append('paragraphtwo', data.paragraphtwo)
      formData.append('videolink', data.videolink)

      const response = await axios.put(
        `http://localhost:5000/preferredcontractors/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      console.log(response.data, 'Updated data')
      alert('Data successfully updated')
      navigate('/theme/contractors/list')
    } catch (error) {
      console.error('Error updating data:', error)
    }
  }

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className="container my-5">
      <h1 className="mb-5">Preferred Contractor Edit</h1>
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
              <label htmlFor="blacktext" className="form-label">
                Black Text
              </label>
              <input
                type="text"
                className="form-control"
                id="blacktext"
                placeholder="Black Text"
                {...register('blacktext', { required: true })}
              />
              {errors.blacktext && <span className="text-danger">Black Text is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="redtext" className="form-label">
                Red Text
              </label>
              <input
                type="text"
                className="form-control"
                id="redtext"
                placeholder="Red Text"
                {...register('redtext', { required: true })}
              />
              {errors.redtext && <span className="text-danger">Red Text is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="paragraph" className="form-label">
                Paragraph
              </label>
              <textarea
                className="form-control"
                id="paragraph"
                rows="4"
                placeholder="Enter Paragraph"
                {...register('paragraph', { required: true })}
              />
              {errors.paragraph && <span className="text-danger">Paragraph is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="blacktitle" className="form-label">
                Black Title
              </label>
              <input
                type="text"
                className="form-control"
                id="blacktitle"
                placeholder="Black Title"
                {...register('blacktitle', { required: true })}
              />
              {errors.blacktitle && <span className="text-danger">Black Title is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="redtitle" className="form-label">
                Red Title
              </label>
              <input
                type="text"
                className="form-control"
                id="redtitle"
                placeholder="Red Title"
                {...register('redtitle', { required: true })}
              />
              {errors.redtitle && <span className="text-danger">Red Title is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="firstlinetitle" className="form-label">
                First Line Title
              </label>
              <input
                type="text"
                className="form-control"
                id="firstlinetitle"
                placeholder="First Line Title"
                {...register('firstlinetitle', { required: true })}
              />
              {errors.firstlinetitle && (
                <span className="text-danger">First Line Title is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="firstline" className="form-label">
                First Line
              </label>
              <input
                type="text"
                className="form-control"
                id="firstline"
                placeholder="First Line"
                {...register('firstline', { required: true })}
              />
              {errors.firstline && <span className="text-danger">First Line is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="secondlinetitle" className="form-label">
                Second Line Title
              </label>
              <input
                type="text"
                className="form-control"
                id="secondlinetitle"
                placeholder="Second Line Title"
                {...register('secondlinetitle', { required: true })}
              />
              {errors.secondlinetitle && (
                <span className="text-danger">Second Line Title is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="secondline" className="form-label">
                Second Line
              </label>
              <input
                type="text"
                className="form-control"
                id="secondline"
                placeholder="Second Line"
                {...register('secondline', { required: true })}
              />
              {errors.secondline && <span className="text-danger">Second Line is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="thirdlinetitle" className="form-label">
                Third Line Title
              </label>
              <input
                type="text"
                className="form-control"
                id="thirdlinetitle"
                placeholder="Third Line Title"
                {...register('thirdlinetitle', { required: true })}
              />
              {errors.thirdlinetitle && (
                <span className="text-danger">Third Line Title is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="thirdline" className="form-label">
                Third Line
              </label>
              <input
                type="text"
                className="form-control"
                id="thirdline"
                placeholder="Third Line"
                {...register('thirdline', { required: true })}
              />
              {errors.thirdline && <span className="text-danger">Third Line is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="blacktitleone" className="form-label">
                Black Title One
              </label>
              <input
                type="text"
                className="form-control"
                id="blacktitleone"
                placeholder="Black Title One"
                {...register('blacktitleone', { required: true })}
              />
              {errors.blacktitleone && (
                <span className="text-danger">Black Title One is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="redtitletwo" className="form-label">
                Red Title Two
              </label>
              <input
                type="text"
                className="form-control"
                id="redtitletwo"
                placeholder="Red Title Two"
                {...register('redtitletwo', { required: true })}
              />
              {errors.redtitletwo && <span className="text-danger">Red Title Two is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="linetitle" className="form-label">
                Line Title
              </label>
              <input
                type="text"
                className="form-control"
                id="linetitle"
                placeholder="Line Title"
                {...register('linetitle', { required: true })}
              />
              {errors.linetitle && <span className="text-danger">Line Title is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="lineone" className="form-label">
                Line One
              </label>
              <input
                type="text"
                className="form-control"
                id="lineone"
                placeholder="Line One"
                {...register('lineone', { required: true })}
              />
              {errors.lineone && <span className="text-danger">Line One is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="linesecondtitle" className="form-label">
                Line Second Title
              </label>
              <input
                type="text"
                className="form-control"
                id="linesecondtitle"
                placeholder="Line Second Title"
                {...register('linesecondtitle', { required: true })}
              />
              {errors.linesecondtitle && (
                <span className="text-danger">Line Second Title is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="linetwo" className="form-label">
                Line Two
              </label>
              <input
                type="text"
                className="form-control"
                id="linetwo"
                placeholder="Line Two"
                {...register('linetwo', { required: true })}
              />
              {errors.linetwo && <span className="text-danger">Line Two is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="linethirdtitle" className="form-label">
                Line Third Title
              </label>
              <input
                type="text"
                className="form-control"
                id="linethirdtitle"
                placeholder="Line Third Title"
                {...register('linethirdtitle', { required: true })}
              />
              {errors.linethirdtitle && (
                <span className="text-danger">Line Third Title is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="linethree" className="form-label">
                Line Three
              </label>
              <input
                type="text"
                className="form-control"
                id="linethree"
                placeholder="Line Three"
                {...register('linethree', { required: true })}
              />
              {errors.linethree && <span className="text-danger">Line Three is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="blacktextconnect" className="form-label">
                Black Text Connect
              </label>
              <input
                type="text"
                className="form-control"
                id="blacktextconnect"
                placeholder="Black Text Connect"
                {...register('blacktextconnect', { required: true })}
              />
              {errors.blacktextconnect && (
                <span className="text-danger">Black Text Connect is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="redtextconnect" className="form-label">
                Red Text Connect
              </label>
              <input
                type="text"
                className="form-control"
                id="redtextconnect"
                placeholder="Red Text Connect"
                {...register('redtextconnect', { required: true })}
              />
              {errors.redtextconnect && (
                <span className="text-danger">Red Text Connect is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="paraone" className="form-label">
                Para One
              </label>
              <input
                type="text"
                className="form-control"
                id="paraone"
                placeholder="Para One"
                {...register('paraone', { required: true })}
              />
              {errors.paraone && <span className="text-danger">Para One is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="projectblacktext" className="form-label">
                Project Black Text
              </label>
              <input
                type="text"
                className="form-control"
                id="projectblacktext"
                placeholder="Project Black Text"
                {...register('projectblacktext', { required: true })}
              />
              {errors.projectblacktext && (
                <span className="text-danger">Project Black Text is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="projectredtext" className="form-label">
                Project Red Text
              </label>
              <input
                type="text"
                className="form-control"
                id="projectredtext"
                placeholder="Project Red Text"
                {...register('projectredtext', { required: true })}
              />
              {errors.projectredtext && (
                <span className="text-danger">Project Red Text is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="projectparagraph" className="form-label">
                Project Paragraph
              </label>
              <input
                type="text"
                className="form-control"
                id="projectparagraph"
                placeholder="Project Paragraph"
                {...register('projectparagraph', { required: true })}
              />
              {errors.projectparagraph && (
                <span className="text-danger">Project Paragraph is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="getmatchtext" className="form-label">
                Get Match Text
              </label>
              <input
                type="text"
                className="form-control"
                id="getmatchtext"
                placeholder="Get Match Text"
                {...register('getmatchtext', { required: true })}
              />
              {errors.getmatchtext && (
                <span className="text-danger">Get Match Text is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="concreteredtext" className="form-label">
                Concrete Red Text
              </label>
              <input
                type="text"
                className="form-control"
                id="concreteredtext"
                placeholder="Concrete Red Text"
                {...register('concreteredtext', { required: true })}
              />
              {errors.concreteredtext && (
                <span className="text-danger">Concrete Red Text is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="paragraphtwo" className="form-label">
                Paragraph Two
              </label>
              <input
                type="text"
                className="form-control"
                id="paragraphtwo"
                placeholder="Paragraph Two"
                {...register('paragraphtwo', { required: true })}
              />
              {errors.paragraphtwo && (
                <span className="text-danger">Paragraph Two is required</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="videolink" className="form-label">
                Video Link
              </label>
              <input
                type="url"
                className="form-control"
                id="videolink"
                placeholder="Video Link"
                {...register('videolink', { required: true })}
              />
              {errors.videolink && <span className="text-danger">Video Link is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PreferredContractorEdit
