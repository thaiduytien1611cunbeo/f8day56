import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-medium text-center p-10" id="contact">
        Đ Á N H G I Á
      </h1>
      <form className="flex flex-col gap-3">
        <div class="form-group">
          <div className="row g-3">
            <div class="col-auto">
              <label for="name" class="visually-hidden">
                name
              </label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="name"
              />
            </div>
            <div class="col-auto">
              <label for="email" class="visually-hidden">
                Email
              </label>
              <input
                type="email"
                readonly
                class="form-control-plaintext"
                id="email"
                value="email@example.com"
              />
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-3">
          Gửi tới chúng tôi
        </button>
      </form>
    </div>
  );
};

export default Contact;
