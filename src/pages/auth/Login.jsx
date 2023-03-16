import React from 'react'

function Login() {
  return (
    <section className="login_wrapper bg-light mt-3">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="auth-image-section h-100">
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-center">Login Form</h2>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control"  placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-outline-dark mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login