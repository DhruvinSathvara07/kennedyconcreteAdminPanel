import React from 'react'

const Slab = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="mb-5">Slab</h1>
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-control shadow py-5">
                            <div className="mb-3">
                                <label htmlFor="heroimg" className="form-label">
                                    Hero Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="heroimg"
                                    accept="image/*"
                                // {...register('heroimg', { required: true })}
                                />
                                {/* {errors.heroimg && <span className="text-danger">Hero Image is required</span>} */}
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
                                // {...register('herotitle', { required: true })}
                                />
                                {/* {errors.herotitle && <span className="text-danger">Hero Title is required</span>} */}
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
                                // {...register('title', { required: true })}
                                />
                                {/* {errors.title && <span className="text-danger">Title is required</span>} */}
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
                                // {...register('sub_title', { required: true })}
                                />
                                {/* {errors.sub_title && <span className="text-danger">Sub Title is required</span>} */}
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
                                // {...register('para', { required: true })}
                                />
                                {/* {errors.para && <span className="text-danger">Paragraph is required</span>} */}
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
                                // {...register('video_link', { required: true })}
                                />
                                {/* {errors.video_link && <span className="text-danger">Video Link is required</span>} */}
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
                                // {...register('btn_text', { required: true })}
                                />
                                {/* {errors.btn_text && <span className="text-danger">Button Text is required</span>} */}
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
                                // {...register('btn_link', { required: true })}
                                />
                                {/* {errors.btn_link && <span className="text-danger">Button Link is required</span>} */}
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

export default Slab