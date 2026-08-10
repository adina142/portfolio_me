import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <Loader2 className="h-10 w-10 animate-spin text-primary opacity-50" />
      <p className="mt-4 text-sm text-muted-foreground font-mono animate-pulse">
        Loading...
      </p>
    </div>
  )
}
