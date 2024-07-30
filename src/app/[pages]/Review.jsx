import React from "react";

const Review = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="review">
        Đ Á N H G I Á
      </h1>
      <form className="flex flex-col gap-3">
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Viết Đánh Giá Của Bạn"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-3">
          Gửi tới chúng tôi
        </button>
      </form>
    </div>
  );
};

export default Review;
