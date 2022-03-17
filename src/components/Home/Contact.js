import React from "react"
import Title from "../Globals/Title"
import Footer from "../Globals/Footer"
import styled from "styled-components"

export default function Contact() {
  return (
    <section className="contact py-3 fade-in">
      <Title title="Contact Us" />
      <Wrapper className="row pb-5 pt-5">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://form.taxi/s/sv4rhi9n" method="POST">
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" name="_gotcha" value="your value" className="gotcha"></input>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                name="tel"
                id="tel"
                placeholder="Your Telephone Number"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="name">Name</label> */}
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="3"
                placeholder="Tell us more.."
              />
            </div>
            <button
              type="submit"
              className="btn btn-pink btn-block text-capitalize mt-5"
            >
              Talk to us
            </button>
          </form>
        </div>
      </Wrapper>
      <Footer />
    </section>
  )
}

const Wrapper = styled.div`
.gotcha {
  display:none;
}
input,textarea {
  width:100%;
  max-width:30em;
  margin:0 auto;
}
.btn {
  width:10em;
  margin:0 auto;
}
`
