import Image from 'next/image'

const BookDetailsInfo = ({ book }) => {
    const { name, genre, coverUrl, description, averageRating, haveRead, currentlyReading, wantToRead } = book;

  return (
    <div className="flex items-center h-screen">
      <div className="flex p-6 border-indigo-200 border">
        <Image
            src={coverUrl}
            alt={name}
            width={400}
            height={600}
            priority
        />
          <div className="ml-12">
            <p className="text-5xl font-bold">{name}</p>
            <p className="mt-2">Genre: {genre}</p>
            <p className="text-2xl font-bold mt-4">Description</p>
            <p className="mt-2 w-full max-w-3xl">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsInfo;