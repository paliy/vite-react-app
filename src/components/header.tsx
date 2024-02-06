import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <a href="/" className='flex gap-2 flex-center'>
        <img
          loading="lazy"
          src='/src/assets/logo.webp'
          alt='App logo'
          width='80'
          height='30'
          className='object-contain'
        ></img>
      </a>

      {
        location.pathname.length > 1 &&
        <div className='flex gap-3 md:gap-5'>
          <button
            onClick={() => navigate(-1)}
            className='my_btn'
          >Back</button>
        </div>
      }
    </nav>
  );
};

export default Header;
