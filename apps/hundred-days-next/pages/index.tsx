import { Layout } from "layouts";
import Link from "next/link";
import { nextProjects, computedIndex } from '@/common-utils'

export function Index() {
  return <Layout>
    <ul className="w-full h-full flex flex-col items-center p-4">
      {
        nextProjects.map((x, i) => {
          return (
            <li key={x.name} className="hover:text-blue-700 cursor-pointer">
              <Link href={`/${x.link}`}>
                <span>
                  {computedIndex(i)}-{x.name}
                </span>
              </Link>
            </li>
          )
        })
      }

    </ul>
  </Layout >
};

export default Index;
