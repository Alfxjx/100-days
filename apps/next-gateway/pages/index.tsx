import { projects } from "config";
import Link from "next/link";

export const computedIndex = index => {
  if (index < 9) {
    return `00${index + 1}`
  }
  if (index < 99) {
    return `0${index + 1}`
  }
  return `${index + 1}`
}

export function Index() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center font-mono">
      <div className="flex-1 grow flex-col justify-center items-center pt-4">
        <h1 className="text-center text-lg font-bold">100 days' challenge</h1>
        <ul className="m-8 py-4 flex justify-center flex-wrap border-2 border-dashed">
          {
            projects.map((proj, index) => {
              return (
                <Link href={proj.link}>
                  <li className="w-28 text-xs text-center bg-slate-50 hover:bg-slate-100 p-2 m-2 rounded cursor-pointer">
                    <span className="mr-2">{computedIndex(index)}</span>
                    <span>{proj.name}</span>
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </div>
      <footer className="flex-0 flex items-center text-center py-2 text-sm">
        Created by Alfxjx with <span className="text-red-400 px-2 text-lg">❤</span>
      </footer>
    </div>
  )
};

export default Index;
