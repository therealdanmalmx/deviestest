import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BookCard({ bookInformation }) {

    const { name, genre, coverUrl, description } = bookInformation;
    console.log('books', bookInformation);
  return (
    <section>
        <Link href="#">
            <div className="max-w-sm rounded overflow-hidden w-full shadow-lg">
                <Image
                    src={coverUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover h-48 w-96"
                />
            <div className="px-6 py-4 h-80">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="text-gray-700 text-base">{description}</div>
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