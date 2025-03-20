import { cn } from "../../lib/utils";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onClick: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onClick }: PaginationProps) => {
  return (
    <div className="flex gap-[2px] flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onClick(page)}
          className={cn(
            "w-fit h-5 px-1 bg-green-500 hover:bg-green-600 text-white font-semibold text-[10px] rounded-[2px] cursor-pointer",
            currentPage === page && "bg-gray-400 hover:bg-gray-500",
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
