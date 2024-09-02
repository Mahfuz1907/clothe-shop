import React from 'react';

function Login() {
  return (
    <div className="container-fixed bg-success"><br/>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card text-success">
                    <div class="card-header text-center">
                        <h4>SIGN IN FORM</h4>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <button type="submit" class="btn btn-success">LOGIN</button>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <p>Don't have an account? <a href="register.html" class="text-success">REGISTER</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div><br/><br/><br/>
    </div>
  );
}

export default Login;