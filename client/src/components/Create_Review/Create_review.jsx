import "./create_review.css";
import { useState } from "react";

function Create_Review({ display }) {
  let initialState = {
    comment: "",
    rating: 0,
    error: {
      comment: "",
      rating: "",
    },
    visible: false,
  };

  const [input, setInput] = useState(initialState);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function toogleShow(e) {
    e.preventDefault();
    setInput({ ...input, visible: !input.visible });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setInput(initialState);
  }

  function handleChange(e) {
    e.preventDefault();
    let error = input.error;

    if (e.target.name === "comment" && e.target.value === "")
      error.comment = "Please add a comment";
    else error.comment = "";

    setInput({ ...input, [e.target.name]: e.target.value, error });
  }

  function clearForm(e) {
    e.preventDefault();

    setInput(initialState);
  }

  function validateForm() {}

  console.log(input);
  return (
    <div className="review_form product-details-action">
      <div className="row justify-content-center">
        <button
          className={`btn-cart ${!input.visible ? "" : "d-none"}`}
          onClick={(e) => toogleShow(e)}
        >
          ADD REVIEW
        </button>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={`row m-100 ${input.visible ? "" : "d-none"}`}
          >
            <div className="star-rating my-3">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setInput({ ...input, rating: index })}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <i
                      className={`mx-2 bi ${
                        index <= (hover || input.rating)
                          ? "bi-star-fill"
                          : "bi-star"
                      }`}
                    ></i>
                  </button>
                );
              })}
            </div>

            <div className={input.error.comment ? "error" : ""}>
              {input.error.comment}
            </div>
            <textarea
              name="comment"
              value={input.comment}
              onChange={(e) => handleChange(e)}
              className="form-control mt-auto"
              placeholder="Would you like to add a comment?"
            ></textarea>

            <div className="col-12 my-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="submit"
                    disabled={validateForm()}
                    value="SAVE REVIEW"
                    className="btn-cart btn-outline-success mt-auto w-100"
                  ></input>
                </div>
                <div className="col-6">
                  <input
                    type="button"
                    value="CANCEL"
                    onClick={(e) => clearForm(e)}
                    className="btn-cart btn-outline-danger mt-auto w-100"
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create_Review;
