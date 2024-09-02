import React from 'react';

function Order() {
  return (
    <div className="container-fixed">
      <section class="text-center container mt-3"> 
            <form action="" method="POST">
               <fieldset>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" id="name" name="name" placeholder="MD. Mahfuzul Alam" class="form-control" required />
                            <label for="name" class="form-label">Enter your name: </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" id="name" name="user_name" placeholder="mahfuz1907" class="form-control" required />
                            <label for="name" class="form-label">Enter your user name: </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="email" id="email" name="email" placeholder="xyz@...com" class="form-control" required />
                            <label for="email" class="form-label">Enter your email id: </label>
                        </div>
                    </div>
                </div>



                <div class="row">
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="tel" id="tel" name="tel" placeholder="01........." class="form-control" required />
                            <label for="phone" class="form-label">Enter your phone no: </label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="text" id="productCode" name="productCode" placeholder="001" class="form-control" required />
                            <label for="productCode" class="form-label">Product Code:</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-floating mb-3 mt-3">
                            <input type="number" id="number" name="number" placeholder="1" class="form-control" required />
                            <label for="number" class="form-label">How many of this item you want to purchase? </label>
                        </div>
                    </div>
                </div>
                </fieldset>
                <fieldset>
                    <div class="form-floating mb-3 mt-3">
                        <textarea class="form-control" rows="5" id="address" name="text"></textarea>
                        <label for="address">Address for Delivery:</label>
                    </div>     
               </fieldset>








               <fieldset>
               <button type="submit" class="btn btn-success me-2">How do You Want to Pay?</button>
                <div class="row justify-content-center">
                    <div class="col-sm-2">
                        <div class="form-check">
                            <label for="bkash" class="form-check-label">
                                <input type="radio" id="bkash" name="payment" value="bkash" class="form-check-input" />
                                <img src="/assets/image/bkash.png" alt="bkash" width="100px" height="100px" />
                            </label>
                            </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-check">
                            <label for="nagad" class="form-check-label">
                                <input type="radio" id="nagad" name="payment" value="nagad" class="form-check-input" />
                            <img src="/assets/image/nagad.png" alt="nagad" width="100px" height="100px" />
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-check">
                            <label for="cod" class="form-check-label">
                                <input type="radio" id="cod" name="payment" value="cod" class="form-check-input" />
                            <img src="/assets/image/cod.png" alt="cod" width="100px" height="100px" />
                            </label>
                            </div>
                    </div>
                </div>
                </fieldset>
               <fieldset>
                <button type="submit" class="btn btn-success me-2">Place Your Order</button>
                <button type="reset" class="btn btn-success">Reset</button>
               </fieldset>
            </form>
        </section>
        <br/>
    </div>
  );
}

export default Order;