import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BookCard({ bookInformation }) {

    const { name, genre, coverUrl, description, averageRating, haveRead, currentlyReading, wantToRead } = bookInformation;

    return (
    <section>
        <Link href="#">
            <div className="max-w-sm rounded overflow-hidden w-full shadow-lg">
                <Image
                    src={coverUrl}
                    alt={name}
                    width={300}
                    height={200}
                    priority
                    className="object-cover h-48 w-96"
                />
            <div className="px-6 py-4 h-[350px]">
                <div className="font-bold text-xl mb-2 capitalize">{name}</div>
                <div className="text-gray-700 text-base">{description}</div>
            </div>
            <div className="px-6 py-4 mt-6 flex justify-between">
                <div>{wantToRead}</div>
                <div>{averageRating.toFixed(1)}</div>
                <div>{haveRead}</div>
                <div>{currentlyReading}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${genre}`}</span>
            </div>
            </div>
        </Link>
    </section>
  )
}

export default BookCard