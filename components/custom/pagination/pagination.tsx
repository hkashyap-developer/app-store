import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
export default function PaginationDemo() {
return (
    <Pagination>
    <PaginationContent>
        <PaginationItem>
        <PaginationPrevious href="/about" />
        </PaginationItem>
        <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
        <PaginationLink href="#" isActive>
            2
        </PaginationLink>
        </PaginationItem>
        <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
        <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
        <PaginationNext href="/about" />
        </PaginationItem>
    </PaginationContent>
    </Pagination>
)
}
