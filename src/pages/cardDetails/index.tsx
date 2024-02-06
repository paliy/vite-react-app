import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ReactMarkdown from 'react-markdown';
import Loader from '../../components/loader';
import { useEffect, useState } from 'react';
import { fetchCardDetailsData } from './fetchData/fetchCardDetails';

const CardDetails = () => {
  const { cardId } = useParams();
  const dispatch = useAppDispatch();
  const currentLocation = window.location.href;
  const [copyTimeout, setCopyTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const state = useAppSelector((state) => state.cardDetails);

  useEffect(() => {
    return () => {
      if (copyTimeout) clearTimeout(copyTimeout);
    };
  }, [copyTimeout]);

  useEffect(() => {
    fetchCardDetailsData(dispatch, cardId);
  }, [cardId, dispatch]);

  const copyToClipboard = () => {
    try {
      // debounce method
      setCopyTimeout(setTimeout(() => {
        navigator.clipboard.writeText(currentLocation);
        setIsCopied(false);
      }, 1200));
      setIsCopied(true);
    } catch (error) {
      //TODO would be good to implement error state
    }
  };

  //TODO need to implement error state. (Error handling is ready)
  if (state.isLoading || !state.cardDetails) {
    return <Loader />;
  }

  // Render post details
  return (
    <div className='main_card glassmorphism mb-16'>
      <div className='flex justify-between items-start'>
        <div>
          <div className='flex-1 flex justify-start items-center gap-5 mb-5'>
            <img
              loading="lazy"
              src={state.cardDetails?.icon[128] || 'src/assets/noname.png'}
              alt='image'
              width={100}
              height={40}
              className='rounded-full object-contain'
            />

            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900 mb-2 orange_gradient'>
                {state.cardDetails?.name}
              </h3>

              <h3 className='font-satoshi font-semibold black-800 mb-2'>
                Component version: <span className="orange_gradient">{state.cardDetails?.version}</span>
              </h3>

              <h3 className='font-satoshi font-semibold text-neutral-400 mb-2'>
                {state.cardDetails?.type.toUpperCase()}
              </h3>

              {state.cardDetails?.documentationUrl && (
                <Link target="blank" className="link" to={state.cardDetails.documentationUrl}>
                  Documentation URL
                </Link>
              )}

              {state.cardDetails?.licenseUrl && (
                <Link target="blank" className="link" to={state.cardDetails.licenseUrl}>
                  License URL
                </Link>
              )}
            </div>
          </div>

          <ReactMarkdown>{state.cardDetails?.longDescription}</ReactMarkdown>

        </div>
      </div>
      <div className='flex items-baseline'>
        <button onClick={copyToClipboard} className='my_btn mt-5 mr-5'>Share</button>
        {isCopied ? <span className='font-satoshi font-semibold text-gray-900 orange_gradient'>Url was copied to clipboard successfully!</span> : null}
      </div>
    </div>
  );
};

export default CardDetails;