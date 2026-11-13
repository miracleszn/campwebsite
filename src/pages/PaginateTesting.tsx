import { useState } from "react"
import { useQuery, keepPreviousData } from "@tanstack/react-query"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// 1. Setup configurations & API types
interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

const LIMIT = 10
const TOTAL_ITEMS = 50 // The Platzi API typically defaults to ~50 products
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / LIMIT)

const fetchProducts = async (page: number): Promise<Product[]> => {
  const offset = (page - 1) * LIMIT

//   await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${LIMIT}`
  )
  if (!response.ok) throw new Error("Failed to fetch products")
  return response.json()
}

export default function PaginatedProductList() {
  const [page, setPage] = useState(1)

  // 2. TanStack Query integration
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ["products", page], // Adding page here ensures refetching on change
    queryFn: () => fetchProducts(page),
    placeholderData: keepPreviousData, // Keeps old data visible while loading the new page (prevents layout flashing!)
  })

  const handlePageChange = (targetPage: number) => {
    if (targetPage >= 1 && targetPage <= TOTAL_PAGES) {
      setPage(targetPage)
    }
  }

  if (isLoading) return <div className="p-8 text-center">Loading items...</div>
  if (isError) return <div className="p-8 text-red-500">Error: {error.message}</div>

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      {/* Product UI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="p-4 border rounded-xl shadow-sm bg-card text-card-foreground">
            <h3 className="font-bold text-lg line-clamp-1">{product.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
            <p className="mt-2 font-semibold text-primary">${product.price}</p>
          </div>
        ))}
      </div>

      {/* 3. Controlled Shadcn UI Pagination */}
      <Pagination className="mt-8">
        <PaginationContent>
          
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(page - 1)
              }}
              className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>

          {/* Dynamic Page Numbers */}
          {Array.from({ length: TOTAL_PAGES }, (_, index) => {
            const pageNumber = index + 1
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={page === pageNumber}
                  onClick={(e) => {
                    e.preventDefault()
                    handlePageChange(pageNumber)
                  }}
                  className="cursor-pointer"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handlePageChange(page + 1)
              }}
              className={page === TOTAL_PAGES ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  )
}