import React from "react";

export default function GoogleMap() {
  return (
    <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172913.64852562998!2d8.241387673372873!3d47.37729495262628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe66e8df1e71fdc03!2sZ%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1703138723426!5m2!1sen!2sin"
        width="100%"
        height="500"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
