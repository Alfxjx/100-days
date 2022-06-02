import { ReactNode } from "react";

export function Layout({ title, children }: { title?: string, children: ReactNode }) {
  return (
    <div className="w-full min-h-screen pt-8 pb-2 bg-white flex flex-col justify-center items-center font-mono">
      <header className="flex-0">{title ? title : "100 days project Next.js"}</header>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-80 h-80 border-2 border-dashed">
          {children}
        </div>
      </div>
      <footer className="flex-0 flex items-center text-center py-2 text-sm">
        Created by Alfxjx with <span className="text-red-400 px-2 text-lg">❤</span>
      </footer>
    </div>
  )
}