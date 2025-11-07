import Image from "next/image";
import { articles } from "../blog";

const page = async ({params}:{params: Promise<{slug:string}>}) => {
    const { slug:id } = await params;
   // console.log(id);
    
    const blog = articles?.find(article => article.link === id);
   // console.log(blog);
   
    return (
      <section className="w-full flex">
        <div className="w-1/5 flex justify-center">
          <h2>Side bar</h2>
        </div>
        <div className="w-4/5 flex flex-col items-center justify-center">
          {blog && (
            <Image
              src={blog?.image}
              alt={blog.title}
              width={650}
              height={550}
            />
          )}

         {
          blog && 

          <article className="max-w-2xl mx-auto p-6 font-sans">
            {blog?.blog?.map((block, index) => {
              switch (block.type) {
                case "h1":
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {block.text}
                    </h1>
                  );
                case "h2":
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-semibold mt-6 mb-3"
                    >
                      {block.text}
                    </h2>
                  );
                case "p":
                  return (
                    <p
                      key={index}
                      className="text-gray-700 mb-4 leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                case "ol":
                  return (
                    <ol
                      key={index}
                      className="list-decimal list-inside mb-6 space-y-2 ml-4"
                    >
                      {block.items?.map((item, i) => (
                        <li key={i} className="text-lg">
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                case "ul":
                  return (
                    <ul
                      key={index}
                      className="list-disc list-inside mb-4 space-y-1 ml-6"
                    >
                      {block.items?.map((item, i) => (
                        <li key={i} className="text-gray-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </article>
         }

        </div>
      </section>
    );
};

export default page;