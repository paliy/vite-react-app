export const Loading: React.FC = () => {
  return (
    <div className='w-full flex-center mb-10 mt-10'>
      <img
        loading="lazy"
        src='src/assets/loader.svg'
        width={50}
        height={50}
        alt='Loading Spinner'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;