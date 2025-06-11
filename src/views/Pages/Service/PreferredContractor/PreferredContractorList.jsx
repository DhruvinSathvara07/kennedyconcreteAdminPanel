import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PreferredContractorList = () => {
  const [showData, setShowData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5000/preferredcontractors')
      setShowData(response.data)
      setError(null)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  // Delete function
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:5000/preferredcontractors/${id}`)
        alert('Item deleted successfully')
        fetchData() // Refresh the data
      } catch (error) {
        console.error('Error deleting item:', error)
        alert('Failed to delete item')
      }
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-danger my-5" role="alert">
        {error}
        <button className="btn btn-outline-danger ms-3" onClick={fetchData}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Preferred Contractor</h1>
          <button className="btn btn-success" onClick={() => navigate('/theme/contractors/page')}>
            Add New Item
          </button>
        </div>

        {showData.length === 0 ? (
          <div className="alert alert-info" role="alert">
            No data found. Please add some items first.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Hero Image</th>
                  <th>Hero Title</th>
                  <th>Blacktext</th>
                  <th>Redtext</th>
                  <th>Paragraph</th>
                  <th>Blacktitle</th>
                  <th>Redtitle</th>
                  <th>Firstlinetitle</th>
                  <th>Firstline</th>
                  <th>Secondlinetitle</th>
                  <th>Secondline</th>
                  <th>Thirdlinetitle</th>
                  <th>Thirdline</th>
                  <th>Blacktitleone</th>
                  <th>Redtitletwo</th>
                  <th>Linetitle</th>
                  <th>Lineone</th>
                  <th>Linesecondtitle</th>
                  <th>Linetwo</th>
                  <th>Linethirdtitle</th>
                  <th>Blacktextconnect</th>
                  <th>Redtextconnect</th>
                  <th>Paraone</th>
                  <th>Projectblacktext</th>
                  <th>Projectredtext</th>
                  <th>Projectparagraph</th>
                  <th>Getmatchtext</th>
                  <th>Concreteredtext</th>
                  <th>Paragraphtwo</th>
                  <th>Videolink</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {showData.map((item, index) => {
                  console.log(item, 'this is item')
                  return (
                    <tr key={item._id || index}>
                      <td>
                        {item.heroimg ? (
                          <img
                            src={`http://localhost:5000/uploads/${item.heroimg}`}
                            alt="Hero"
                            style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                            className="rounded"
                          />
                        ) : (
                          'No Image'
                        )}
                      </td>
                      <td>{item.herotitle || 'N/A'}</td>
                      <td>{item.blacktext || 'N/A'}</td>
                      <td>{item.red || 'N/A'}</td>
                      <td>
                        <div style={{ maxWidth: '200px' }}>
                          {item.para
                            ? item.para.length > 100
                              ? `${item.para.substring(0, 100)}...`
                              : item.para
                            : 'N/A'}
                        </div>
                      </td>
                      <td>{item.blacktitle || 'N/A'}</td>
                      <td>{item.redtitle || 'N/A'}</td>
                      <td>{item.firstlinetitle || 'N/A'}</td>
                      <td>{item.firstline || 'N/A'}</td>
                      <td>{item.secondlinetitle || 'N/A'}</td>
                      <td>{item.secondline || 'N/A'}</td>
                      <td>{item.thirdlinetitle || 'N/A'}</td>
                      <td>{item.thirdline || 'N/A'}</td>
                      <td>{item.blacktitleone || 'N/A'}</td>
                      <td>{item.redtitletwo || 'N/A'}</td>
                      <td>{item.line1title || 'N/A'}</td>
                      <td>{item.line1 || 'N/A'}</td>
                      <td>{item.line2title || 'N/A'}</td>
                      <td>{item.line2 || 'N/A'}</td>
                      <td>{item.line3title || 'N/A'}</td>
                      <td>{item.blacktextconnect || 'N/A'}</td>
                      <td>{item.redtextconnect || 'N/A'}</td>
                      <td>
                        <div style={{ maxWidth: '200px' }}>
                          {item.paratwo
                            ? item.paratwo.length > 100
                              ? `${item.paratwo.substring(0, 100)}...`
                              : item.paratwo
                            : 'N/A'}
                        </div>
                      </td>
                      <td>{item.projectblacktext || 'N/A'}</td>
                      <td>{item.projectredtext || 'N/A'}</td>
                      <td>
                        <div style={{ maxWidth: '200px' }}>
                          {item.paratwo
                            ? item.paratwo.length > 100
                              ? `${item.paratwo.substring(0, 100)}...`
                              : item.paratwo
                            : 'N/A'}
                        </div>
                      </td>
                      <td>{item.getmatchedtext || 'N/A'}</td>
                      <td>{item.concreteredtext || 'N/A'}</td>
                      <td>
                        <div style={{ maxWidth: '200px' }}>
                          {item.paratwo
                            ? item.paratwo.length > 100
                              ? `${item.paratwo.substring(0, 100)}...`
                              : item.paratwo
                            : 'N/A'}
                        </div>
                      </td>
                      <td>
                        {item.video_link ? (
                          <a
                            href={item.video_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary"
                          >
                            View Video
                          </a>
                        ) : (
                          'N/A'
                        )}
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <i
                            className="fa-solid fa-pen-to-square text-primary cursor-pointer"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate(`/theme/contractors/edit/${item._id}`)}
                            title="Edit"
                          ></i>
                          <i
                            className="fa-solid fa-trash text-danger cursor-pointer"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleDelete(item._id)}
                            title="Delete"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default PreferredContractorList
