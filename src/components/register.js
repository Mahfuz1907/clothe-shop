import React from 'react';

function Register() {
  return (
    <div className="container-fixed bg-success"><br/>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card text-success">
                    <div class="card-header text-center"> 
                        <h4>SIGN UP FORM</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" />
                            </div>
                            <button type="submit" class="btn btn-success">REGISTER</button>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <p>Already have an account? <a href="login.html" class="text-success">LOGIN</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div><br/><br/><br/>
    </div>
  );
}

export default Register;