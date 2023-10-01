import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-300 p-4 w-screen ">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center ">
        <a
          href=""
          onClick={() => {
            navigate("/");
          }}
        >
          DaffaTech
        </a>
        <nav>
          <ul className="flex items-center">
            <li>
              <a
                href="#"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
