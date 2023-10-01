import { useState } from "react";

const Hero = () => {
  const [language, setLanguage] = useState("en");

  const data = {
    title: {
      en: "Create Product",
      id: "Buat Produk",
    },
    description: {
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <main className="relative">
      <section className="text-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png"
          alt=""
          className="block mx-auto w-[250px]"
        />
        <h1 className="text-3xl my-7 ">{data.title[language]}</h1>
        <p className="w-[80%] mx-auto md:w-[60%]">
          {data.description[language]}
        </p>
      </section>
      <div className="flex justify-center gap-3">
        <button
          className=" my-5 bg-orange-200 py-2 px-5 rounded"
          onClick={() => {
            console.log(Math.floor(Math.random() * 101));
          }}
        >
          Generate Random number
        </button>
        <button
          className=" my-5 bg-orange-200 py-2 px-5 rounded"
          onClick={toggleLanguage}
        >
          toggle language
        </button>
      </div>
    </main>
  );
};
export default Hero;
