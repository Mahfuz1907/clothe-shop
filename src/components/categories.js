import React from 'react';

function categories() {
  return (
    <div className="container-fixed bg-success">
       <section class="text-success text-center">
                <h2 class="text-center text-white">Featuring Products</h2>

                
                <div id="demo" class="carousel slide container bg-white" data-bs-ride="carousel">

                    
                    <div class="carousel-indicators bg-success"> 
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                      </div>

            
           <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/assets/image/image 2.png" alt="Men's Shalwar Kameez set Blue Colour" class="d-block w-100" />
              <div class="carousel-caption text-success">
                <h3 class="bg-light text-success">Shalwar Kameez</h3>
                <p  class="bg-light text-success">Men's Shalwar Kameez set Blue Colour</p>
            </div>
           </div>
           <div class="carousel-item">
            <img src="/assets/image/image 3.png" alt="Men's Shalwar Kameez set White Colour" class="d-block w-100" />
            <div class="carousel-caption text-success">
                <h3 class="bg-light text-success">Shalwar Kameez</h3>
                <p class="bg-light text-success">Men's Shalwar Kameez set White Colour</p>
            </div>
                      </div>
                 <div class="carousel-item">
                  <img src="/assets/image/image 4.png" alt="Men's Formal Shirt White Colour" class="d-block w-100" />
                  <div class="carousel-caption text-success">
                    <h3 class="bg-light text-success">Formal Shirt</h3>
                    <p class="bg-light text-success">Men's Formal Shirt White Colour</p>
                </div>
                 </div>
                 <div class="carousel-item">
                    <img src="/assets/image/image 5.png" alt="Men's Blazer Black Colour" class="d-block w-100" />
                    <div class="carousel-caption text-success">
                        <h3 class="bg-light text-success">Blazer</h3>
                        <p class="bg-light text-success">Men's Blazer Black Colour</p>
                    </div>
                   </div>
                   <div class="carousel-item">
                    <img src="/assets/image/image 6.png" alt="Men's Shalwar Kameez Black Colour" class="d-block w-100" />
                    <div class="carousel-caption text-success">
                        <h3 class="bg-light text-success">Shalwar Kameez</h3>
                        <p class="bg-light text-success">Men's Shalwar Kameez Black Colour</p>
                    </div>
                   </div>
                   <div class="carousel-item">
                    <img src="/assets/image/image 7.png" alt="Shaal Black Colour" class="d-block w-100" />
                    <div class="carousel-caption text-success">
                        <h3 class="bg-light text-success">Shaal</h3>
                        <p class="bg-light text-success">Shaal Black Colour</p>
                    </div>
                   </div>
                </div>

                 
                   <button class="carousel-control-prev btn btn-success" type="button" data-bs-target="#demo" data-bs-slide="prev">
               <span class="carousel-control-prev-icon"></span>
             </button>
               <button class="carousel-control-next btn btn-success" type="button" data-bs-target="#demo" data-bs-slide="next">
             <span class="carousel-control-next-icon"></span>
                 </button>
                </div>
            </section>




            <section>
            <div class="container mt-5">
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div class="input-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Search..." />
                    </div>
                  </div>
                </div>
              </div>
           </section>




           <section class="container pt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card text-success" style={{width:'400px'}}>
                    <img class="card-img-top" src="/assets/image/image 2.png" alt="Shalwar Kameez Blue Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S SHALWAR KAMEEZ</h4>
                      <p class="card-text text-center">Shalwar Kameez Blue Colour</p>
                      <p class="card-text text-center">Best Quality Cloth</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 001</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 5000</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>

            <div class="col-md-4">
                <div class="card text-success" style={{width:'400px'}}>
                    <img class="card-img-top" src="/assets/image/image 3.png" alt="Shalwar Kameez White Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S SHALWAR KAMEEZ</h4>
                      <p class="card-text text-center">Shalwar Kameez White Colour</p>
                      <p class="card-text text-center">Very Good Quality Cloth</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 002</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 3500</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>


            <div class="col-md-4">
                <div class="card text-success" style={{width:'400px'}}>
                    <img class="card-img-top" src="/assets/image/image 4.png" alt="Formal Shirt White Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S FORMAL SHIRT</h4>
                      <p class="card-text text-center">Formal Shirt White Colour</p>
                      <p class="card-text text-center">Best Quality Cloth</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 003</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 2000</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>
        </div> <br/><br/>

        <div class="row">
            <div class="col-md-4">
                <div class="card text-success" style={{width:'400px'}}>
                    <img class="card-img-top" src="/assets/image/image 5.png" alt="Blazer Black Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S BLAZER</h4>
                      <p class="card-text text-center">Blazer Black Colour</p>
                      <p class="card-text text-center">Best Quality Cloth</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 004</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 2500</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>



            <div class="col-md-4">
                <div class="card text-success" style={{width:'400px'}}>
                    <img class="card-img-top" src="/assets/image/image 6.png" alt="Shalwar Kameez Black Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S SHALWAR KAMEEZ</h4>
                      <p class="card-text text-center">Shalwar Kameez Black Colour</p>
                      <p class="card-text text-center">Good Quality Cloth</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 005</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 1500</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>



            <div class="col-md-4">
                <div class="card text-success" style={{ width: '400px' }}>
                    <img class="card-img-top" src="/assets/image/image 7.png" alt="Shaal Black Colour" />
                    <div class="card-body">
                      <h4 class="card-title text-center">MEN'S SHAAL</h4>
                      <p class="card-text text-center">Shaal Black Colour</p>
                      <p class="card-text text-center">Best Quality</p>
                      <div class="d-flex justify-content-center">
                        <button href="#" class="btn btn-success">PRODUCT CODE: 006</button>
                      </div><br/>
                      <div class="row">
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <a href="order.html" class="btn btn-success">ORDER</a>
                              </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="d-flex justify-content-center">
                              <button class="btn btn-success">&#128722 Add To Cart</button>
                              </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="d-flex justify-content-center">
                                <button href="#" class="btn btn-success">&#2547 750</button>
                              </div>
                        </div>
                          
                      </div>
                      
                      
                    </div>
                  </div>       
            </div>
        </div><br/><br/>
</section>
    </div>
  );
}

export default categories;