import React from "react";

const Form = () => {
  return (
    <form class="flex flex-col gap-4">
      <div class="form-group">
        <label htmlFor="email">Hãy liên hệ với tôi bằng :</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <p className="font-bold">Tôi muốn đến :</p>
        <label htmlFor="address">Địa Chỉ</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label htmlFor="number">Chúng tôi có :</label>
        <input
          type="number"
          class="form-control"
          id="number"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label htmlFor="dateStart">Bắt đầu từ :</label>
        <input
          type="date"
          class="form-control"
          id="dateStart"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label htmlFor="dayEnd">Kết thúc vào :</label>
        <input
          type="date"
          class="form-control"
          id="dayEnd"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
