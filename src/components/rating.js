import React from 'react';

function Rating() {
  return (
    <div className="container-fixed bg-success container-mt-8">
        <div className='container'>
         <br/><br/>

        <h2 class="mb-4">Rate Our Shop</h2>
        <div class="mb-3">
          <p>Your Rating: <span id="currentRating">0</span></p>
          <div id="ratingStars" className='d-flex'>
          <span class="star me-1" data-value="1"><i class="fas fa-star"></i></span>
          <span class="star me-1" data-value="2"><i class="fas fa-star"></i></span>
          <span class="star me-1" data-value="3"><i class="fas fa-star"></i></span>
          <span class="star me-1" data-value="4"><i class="fas fa-star"></i></span>
          <span class="star me-1" data-value="5"><i class="fas fa-star"></i></span>
          </div>
        </div>
        <div class="mb-3">
          <textarea class="form-control" rows="3" placeholder="Provide feedback (optional)"></textarea>
        </div>
        <button class="btn btn-light text-success">Submit Rating</button>
        </div>
      
        <br/><br/>
      

      
    </div>
  );
}

export default Rating;