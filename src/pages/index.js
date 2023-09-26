import BookCard from "@/components/BookCard"

export default function Home() {
  let bookInformation = [
    {
      id: 1,
      name:"Little Book",
      description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated",
      coverUrl: "https://picsum.photos/id/10/200/300",
      genre: "Philosophy"
    },
    {
      id: 2,
      name:"Middle Book",
      description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with",
      coverUrl: "https://picsum.photos/id/20/200/300",
      genre: "History"
    },
  ]
  return (
    <main
      className="min-h-screen p-16"
    >
      <div className="text-4xl font-bold text-center">Devies Reads</div>
      <div className="text-xl font-bold text-center">The ultimate programmers book list</div>
      <div className="mt-24 flex gap-10">
        {bookInformation.map((book) => {
          return (
            <div key={book.id}>
              <BookCard bookInformation={book} />
            </div>
          );
        })}
      </div>
    </main>
  )
}

