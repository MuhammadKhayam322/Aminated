import Image from 'next/image';

interface TrainingCardProps {
  imageSrc: string;   
  title: string;      
  description: string; 
  title2: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ imageSrc, title,title2, description }) => {
  return (
    <div className="w-120 mb-20 h-48 bg-white  justify-center items-center border-2 border-gray-300 rounded-lg shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        width={50}
        height={50}
        className="object-cover ml-5 mt-15 absolute" 
      />
      <div className='ml-10 mt-10'>
       <h1 className="text-lg font-bold ml-25 w-60 mt-20">{title} </h1> 
       <h2 className="text-lg font-bold ml-25 w-60 mt-20">{title2} </h2>
       <p className="text-sm ml-25 mt-20 w-55">{description}</p>
       </div>
    </div>
  );
};

export default TrainingCard;