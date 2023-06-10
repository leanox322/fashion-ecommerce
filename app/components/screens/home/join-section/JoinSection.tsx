import React, { FC, useState } from "react";

const JoinSection: FC = () => {
  const [formData, setFormData] = useState({ email: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="text-center bg-[#E5C643] py-36">
      <div className="w-1/2 m-auto">
        <h2 className="text-white text-5xl font-black leading-[1.5]">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        <h4 className="text-[#FFFCF8] mt-9 mb-12 text-3xl">
          Type your email down below and be young wild generation
        </h4>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white w-[570px] m-auto rounded-[10px] flex justify-between"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((data) => ({
                ...data,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Add your email here"
            className="p-7 w-full rounded-[10px] text-2xl text-[#767676]"
          />
          <button className="text-white bg-black px-10 py-4 m-2.5 rounded-lg font-medium text-3xl">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinSection;
