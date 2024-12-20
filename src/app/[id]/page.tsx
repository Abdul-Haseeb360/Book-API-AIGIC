// "use client";

// import { useEffect, useState } from "react";

// interface Book {
//   id: string;
//   name: string;
//   author: string;
//   type: string;
//   description: string;
//   available: boolean;
// }

// export default function BookDetail({ params }: { params: { id: string } }) {
//   const [book, setBook] = useState<Book | null>(null);

//   // Simulate fetching data for the specific book
//   useEffect(() => {
//     // Dummy book data (Replace this with an actual fetch API call)
//     const fetchData = async () => {
//       const books = [
//         {
//           id: "1",
//           name: "Clean Code",
//           author: "Robert Cecil Martin",
//           type: "Fiction",
//           description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. ",
//           image: "/images.jfif",
//           available: true,
//         },
//         {
//           id: "2",
//           name: "Clean Architecture",
//           author: "Robert Cecil Martin",
//           type: "Self-Help",
//           description:
//             "Practical Software Architecture Solutions from the Legendary Robert C. Martin (“Uncle Bob”).",
//             image: "/images.jfif",
//           available: false,
//         },
//         {
//           id: "3",
//           name: "Atomic Habits",
//           author: "James Clear",
//           type: "Self-Help",
//           description:
//             "A guide to building good habits, breaking bad ones, and mastering tiny behaviors.",
//             image: "/images.jfif",
//           available: false,
//         },
//         {
//           id: "4",
//           name: "Atomic Habits",
//           author: "James Clear",
//           type: "Self-Help",
//           description:
//             "A guide to building good habits, breaking bad ones, and mastering tiny behaviors.",
//             image: "/images.jfif",
//           available: false,
//         },
//         {
//           id: "5",
//           name: "Atomic Habits",
//           author: "James Clear",
//           type: "Self-Help",
//           description:
//             "A guide to building good habits, breaking bad ones, and mastering tiny behaviors.",
//             image: "/images.jfif",
//           available: false,
//         },
//         {
//           id: "6",
//           name: "Atomic Habits",
//           author: "James Clear",
//           type: "Self-Help",
//           description:
//             "A guide to building good habits, breaking bad ones, and mastering tiny behaviors.",
//             image: "/images.jfif",
//           available: false,
//         },
//       ];

//       // Find the book by ID
//       const foundBook = books.find((book) => book.id === params.id);
//       setBook(foundBook || null);
//     };

//     fetchData();
//   }, [params.id]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       {book ? (
//         <div className="max-w-2xl mx-4 bg-white shadow-lg rounded-lg overflow-hidden">
//           {/* Book Image (Optional) */}
//           <div className="bg-blue-600 h-40 flex items-center justify-center">
//             <span className="text-6xl text-white font-bold">
//               {book.name.charAt(0)}
//             </span>
//           </div>

//           {/* Book Content */}
//           <div className="p-6">
//             <h1 className="text-4xl font-bold text-gray-800 mb-2">
//               {book.name}
//             </h1>
//             <p className="text-gray-600 text-lg mb-4">
//               <span className="font-semibold">Author:</span> {book.author}
//             </p>
//             <p className="text-gray-600 text-lg mb-4">
//               <span className="font-semibold">Type:</span> {book.type}
//             </p>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               {book.description}
//             </p>

//             <p className="text-gray-800 font-semibold mb-4">
//               Availability:{" "}
//               <span
//                 className={`${
//                   book.available ? "text-green-600" : "text-red-600"
//                 } font-bold`}
//               >
//                 {book.available ? "Available" : "Unavailable"}
//               </span>
//             </p>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 Borrow Book
//               </button>
//               <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
//                 Back to List
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <h1 className="text-3xl font-semibold text-gray-600">
//           Book not found!
//         </h1>
//       )}
//     </div>
//   );
// }










"use client";

import { useEffect, useState } from "react";

interface Book {
  id: string;
  name: string;
  author: string;
  type: string;
  description: string;
  image: string;
  available: boolean;
}

export default function BookDetail({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    // Dummy data for books (replace with an actual API call if needed)
    const books = [
      {
        id: "1",
        name: "Clean Code",
        author: "Robert Cecil Martin",
        type: "Programming",
        description:
          "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
        image: "/CleanCode.jpg",
        available: true,
      },
      {
        id: "2",
        name: "Clean Architecture",
        author: "Robert Cecil Martin",
        type: "Software Design",
        description:
          "Practical Software Architecture Solutions from the Legendary Robert C. Martin.",
        image: "/CleanArchitecture.jpg",
        available: false,
      },
      {
        id: "3",
        name: "Code Complete",
        author: "Steve McConnell",
        type: "Self-Help",
        description:
          "encouraging developers to continue past code-and-fix programming and the big design up front and waterfall",
        image: "/images.png",
        available: true,
      },
      {
        id: "4",
        name: "Design Patterns",
        author: "Erich Gamma,",
        type: "Self-Help",
        description:
          " Elements of Reusable Object-Oriented Software is a software engineering book describing software design patterns.",
        image: "/images (1).png",
        available: true,
      },
      {
        id: "5",
        name: "The Pragmatic Programmer",
        author: "David Thomas, Andrew Hunt.",
        type: "Self-Help",
        description:
          "“One of the most significant books in my life.” –Obie Fernandez, Author, The Rails Way “Twenty years ago, the first edition of The Pragmatic Programmer",
        image: "/images (2).png",
        available: true,
      },
      {
        id: "6",
        name: "Beginner's Step-by-Step Coding Course",
        author: "DK",
        type: "Self-Help",
        description:
          "Coding skills are in high demand and the need for programmers is still growing. ",
        image: "/images (3).png",
        available: true,
      },
    ];

    // Find the book by its ID
    const foundBook = books.find((b) => b.id === params.id);
    setBook(foundBook || null);
  }, [params.id]);

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-600">Book not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-[#dfe9f3] to-[#ffffff]">
      <div className="max-w-4xl w-full bg-white mx-5 mt-4 rounded-lg shadow-lg overflow-hidden">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-80 object-fill"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.name}</h1>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Type:</span> {book.type}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {book.description}
          </p>
          <p
            className={`text-lg font-semibold ${
              book.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.available ? "Available" : "Unavailable"}
          </p>
        </div>


        <div className="flex gap-4 mx-6 mb-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Borrow Book
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
                Back to List
              </button>
            </div>
      </div>

    </div>
  );
}
