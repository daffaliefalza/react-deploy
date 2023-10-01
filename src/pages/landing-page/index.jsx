import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* header start */}
      <header>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center p-3">
          <a href="#">DaffaTech</a>
          <nav>
            <ul className="flex">
              <li>
                <button
                  className="bg-orange-300 py-2 px-5 rounded hover:bg-indigo-400 duration-300"
                  onClick={() => {
                    navigate("/product");
                  }}
                >
                  Go to Product
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* header end */}

      <main>
        {/* hero */}
        <section id="hero " className="bg-[#37517e] py-[80px] sm:py-[20px]">
          <div className="w-screen h-screen flex flex-col justify-center max-w-[1200px] mx-auto items-center px-3 text-center sm:text-left md:grid md:grid-cols-2 md:gap-5 md:place-items-center ">
            <div id="hero__headline">
              <h1 id="hero-title" className="text-white text-[48px]">
                Better Solutions for your business
              </h1>
              <p className="text-white my-5 opacity-[0.6] text-[20px]">
                We are team of talented designers making websites with passion
              </p>
              <div id="buttons" className="text-white mb-3 ">
                <button className="mr-3 bg-[#47b2e4] py-2 px-5 rounded-xl">
                  Get Started
                </button>
                <button>Watch Video</button>
              </div>
            </div>
            <figure>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/biometrics-technology-isometric-1739200-1479088.png"
                alt="hero banner"
              />
            </figure>
          </div>
        </section>

        <section
          id="news-letter"
          className="bg-[#f3f5fa] py-10 px-3 text-center h-[239px]"
        >
          <h2 className="text-[#37517e] text-[24px] font-bold">
            Join Our Newsletter
          </h2>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
            aspernatur.
          </p>
          <form className="relative w-[70%] mx-auto md:w-[50%]">
            <input
              type="email"
              className="w-[100%] rounded-[50px]  py-[18px] h-[30px] px-4 focus:outline-none"
            />
            <button className="bg-[#47b2e4] rounded-[50px] pt-[6px] pb-[6px] px-[28px] absolute right-0 text-white">
              subscribe
            </button>
          </form>
        </section>
      </main>

      <footer>
        <section className="px-3 max-w-[1200px] mx-auto grid gap-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4  py-8">
          <div>
            <h2 className="text-[#37517e] font-bold mb-3">DaffaTech</h2>
            <div>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
            </div>

            <div>
              <p>
                <strong>Phone:</strong>+1 5589 55478855
              </p>
              <p>
                <strong>Email:</strong>info@example.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[#37517e] font-bold mb-3">Useful Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#37517e] font-bold mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#37517e] font-bold mb-3">
              Our Social Networks
            </h3>
            <p>
              Cras fementum odio eu fegugiat lide par naso tierra videa magna
            </p>
            <div className="mt-2 flex items-center  gap-4 ">
              <button className="w-[50px] h-[50px] bg-[#47b2e4] rounded-[50%]"></button>
              <button className="w-[50px] h-[50px] bg-[#47b2e4] rounded-[50%]"></button>
              <button className="w-[50px] h-[50px] bg-[#47b2e4] rounded-[50%]"></button>
              <button className="w-[50px] h-[50px] bg-[#47b2e4] rounded-[50%]"></button>
              <button className="w-[50px] h-[50px] bg-[#47b2e4] rounded-[50%]"></button>
            </div>
          </div>
        </section>
        <div className="bg-[#37517e] px-3 h-[81px]">
          <div className="max-w-[1200px] mx-auto text-white flex justify-between  pt-8">
            <p>© Copyright DaffaTech. All Rights Reserved</p>
            <p>
              Designed by
              <span className="text-[#47b2e4]"> Andi Daffa Liefalza</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
