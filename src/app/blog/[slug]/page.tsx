import Image from "next/image";
import { articles } from "../blog";
import Link from "next/link";

const page = async ({params}:{params: Promise<{slug:string}>}) => {
    const { slug:id } = await params;
   // console.log(id);
    
    const blog = articles?.find(article => article.link === id);
   // console.log(blog);
   
    return (
      <section className="w-full md:w-[90%] lg:w-[80%] p-0.5 lg:p-3 flex flex-col-reverse lg:flex-row mx-auto">
        {/* Side Navber for all blog*/}
        <div className="w-full lg:w-3/10">
          <h3 className="text-lg font-medium mb-1.5">Related Blogs:</h3>
          <div className="flex flex-col gap-3">
            {
              articles?.map(article => 
              <div key={article?.id}>
                <div className="flex gap-2">
                  {
                    article && 
                    <Image
                     src={article?.image}
                     width={100} height={150} alt={article?.title}
                     />
                  }
                   <Link href={article?.link}>
                   <h2 className="text-lg font-medium underline underline-offset-1">{article?.title}</h2>
                   </Link>
                 </div>
                <div className="w-full border border-gray-400 my-2 pr-2"></div>
              </div>
              )
            }
          </div>
        </div>
  
        {/* Blog Area */}
        <div className="w-full lg:w-7/10 flex flex-col items-center justify-center">
          {blog && (
            <Image
              src={blog?.image}
              alt={blog.title}
              width={400}
              height={550}
            />
          )}

         {
          blog && 

          <article className="max-w-2xl mx-auto px-2 md:px-3 lg:px-6 py-2 font-sans">
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