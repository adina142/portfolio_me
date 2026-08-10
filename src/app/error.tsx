"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="bg-destructive/10 p-4 rounded-full mb-6">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Something went wrong!</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
      </p>
      <Button onClick={() => reset()} className="gap-2">
        <RefreshCcw className="h-4 w-4" /> Try again
      </Button>
    </div>
  )
}
