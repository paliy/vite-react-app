import { ICard } from '../types/types';
import { Outlet, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

interface Props {
  cardData: ICard;
}

const Card = ({ cardData }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${cardData.id}`);
  }

  return (
    <>
      <div onClick={handleCardClick} className='post_card cursor-pointer'>
        <div className='flex justify-between items-start gap-5'>
          <div className='flex-1 flex justify-start flex-col items-center gap-3'>
            <img
              loading="lazy"
              src={cardData.icon[32] || 'src/assets/noname.png'}
              alt={cardData.name || 'Card Image'}
              width={40}
              height={40}
              className='rounded-full object-contain'
            />

            <div className='flex flex-col'>
              <h3 className='font-satoshi text-center font-semibold text-gray-900 mb-2'>
                {cardData.name}
              </h3>

              <h3 className='font-satoshi text-center font-semibold text-neutral-400 mb-3'>
                {cardData.type.toUpperCase()}
              </h3>

              <ReactMarkdown className="mb-3">{cardData.shortDescription}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Card;