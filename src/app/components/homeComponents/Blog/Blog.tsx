import { articles } from '@/app/blog/blog';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OurBlog = () => {
    
    return (
      <section className="mb-10 md:mb-16 px-2 h-fit">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-5 md:mb-7">
          - OUR BLOG -
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3">
          {articles?.map((article) => (
            <div key={article.id} className="relative h-[500px] w-full overflow-hidden group">
              <div className="w-full">
                <Image
                  src={article.image}
                  alt={article.title} fill
                  className="object-cover group-hover:scale-120 transition-transform duration-500"
                />
              </div>
              <div className="p-5 absolute bottom-0 left-5 md:left-8 bg-white">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {article?.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article?.blog?.find(a => a.type === 'p')?.text?.slice(0, 80)}...</p>
                <Link
                  href={`/blog/${article?.link}`}
                  className="group relative z-20 text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <span className='text-base'>Read More</span>
                  <span className='static lg:absolute z-0 text-sm lg:left-16 group-hover:left-[88px] lg:opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in'> <MoveRight/> </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default OurBlog;