const ListCard = ({ image, title, description }: {image: string; title: string; description: string;}) => {
  return (
    <div className='xl:container min-h-full p-8 bg-sky-50/80 rounded-lg'>
      <img src={image} alt={title} className="bg-sky-950 w-12 h-12 rounded-lg p-1.5 object-cover"/>
      <div className="text-xlg font-bold mt-2 py-0.5">{title}</div>
      <div className="line-clamp-2 text-sm py-0.5">{description}</div>
      <div className="text-sky-800 pt-1 ">Selengkapnya &gt;</div>
    </div>
  )
}

export default ListCard;