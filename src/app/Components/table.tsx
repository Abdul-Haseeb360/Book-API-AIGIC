import Link from "next/link";
import React from "react";


// interface Book {
//   id: string;
//   name: string;
//   type: string;
// }

export default async function table() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const res = await url.json();
  return (

    <div className="overflow-x-auto mb-9">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-6">
        Book List
      </h1>
      <div className="px-8">
        <table className="min-w-full border border-gray-200 rounded-2xl">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <th className="py-3 px-6 text-left font-semibold">ID</th>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Type</th>
              <th className="py-3 px-6 text-center font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {res.map((book: any, index: number) => (
              <tr
                key={book.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all duration-200`}
              >
                <td className="py-3 px-6 text-left text-gray-700">{book.id}</td>
                <td className="py-3 px-6 text-left text-gray-700">
                  {book.name}
                </td>
                <td className="py-3 px-6 text-left text-gray-700">
                  {book.type}
                </td>
                <td className="py-3 px-6 text-center">
                  <Link
                    href={`/${book.id}`}
                    className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition-all duration-200"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div>
    //   <h1 className="text-4xl font-extrabold text-center text-gray-800 my-6">
    //     Book List
    //   </h1>
    //   <div className="overflow-x-auto px-4 ">
    //     <table className="min-w-full border  border-gray-200 rounded-2xl">
    //       <thead>
    //         <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
    //           <th className="py-3 px-6 text-left font-semibold">ID</th>
    //           <th className="py-3 px-6 text-left font-semibold">Name</th>
    //           <th className="py-3 px-6 text-left font-semibold">Type</th>
    //           <th className="py-3 px-6 text-center font-semibold">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {res.map((book: any, index: number) => (
    //           <tr
    //             key={book.id}
    //             className={`${
    //               index % 2 === 0 ? "bg-gray-50" : "bg-white"
    //             } hover:bg-gray-100 transition-all duration-200`}
    //           >
    //             <td className="py-3 px-6 text-left text-gray-700">{book.id}</td>
    //             <td className="py-3 px-6 text-left text-gray-700">
    //               {book.name}
    //             </td>
    //             <td className="py-3 px-6 text-left text-gray-700">
    //               {book.type}
    //             </td>
    //             <td className="py-3 px-6 text-center">
    //               <Link
    //                 href={`/${book.id}`}
    //                 className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition-all duration-200"
    //               >
    //                 View Details
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>



    
  );
}
