"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useManegePageContext } from '@/app/contexts/managePageStatesContext/useManegePageContext';

const Pagination = () => {
    const {page,setPage,totalPage} = useManegePageContext();
    console.log("from pagi", totalPage);
    

    let pages: (number | "...")[] = [];
    
    // If total <= 5, show all pages
    if (totalPage <= 5) {
     Array.from({ length: totalPage }, (_, i) => pages.push(i + 1));
    }
    // CASE 1: Current near the start (1,2,3)
   else if (page <= 3) {
    pages =  [1, 2, 3, 4, "...", totalPage];
   }
   // CASE 2: Current near the end
   else if (page >= totalPage - 2) {
    pages =  [1, "...", totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
   }
   else{
   // CASE 3: Middle position
   pages= [1, "...", page - 1, page, page + 1, "...", totalPage];
   }

    return (
    <>
        <Button variant="outline" disabled={page === 1} buttonSize={'sm'}
          onClick={() => setPage(page - 1)}
          > <ChevronLeft className='size-7'/>
        </Button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={i} className="px-2">…</span>
          ) : (
            <Button
              key={i}
              variant={p === page ? "default" : "outline"}
              onClick={() => setPage(p)}
              buttonSize={'sm'}
            >
              {p}
            </Button>
          )
        )}
  
        <Button variant="outline" disabled={page === totalPage} buttonSize={'sm'}
          onClick={() => setPage(page + 1)}
          > <ChevronRight className='size-7'/>
        </Button> 
    </>
    );
};

export default Pagination;