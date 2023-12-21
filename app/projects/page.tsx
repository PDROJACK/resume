import ProjectCard from '../project-card'
import WidgetNewsletter from '@/components/widget-newsletter'
import WidgetSponsor from '@/components/widget-sponsor'

import Icon01 from '@/public/images/project-icon-01.svg'
import Icon02 from '@/public/images/project-icon-02.svg'
import Icon03 from '@/public/images/project-icon-03.svg'
import Icon04 from '@/public/images/project-icon-04.svg'
import Icon05 from '@/public/images/project-icon-05.svg'
import Icon06 from '@/public/images/project-icon-06.svg'
import Icon07 from '@/public/images/project-icon-07.svg'
import Icon08 from '@/public/images/project-icon-08.svg'

export const metadata = {
  title: 'Projects - DevSpace',
  description: 'Page description',
}

export default function Projects() {


  const items01 = [
    {
      id: 0,
      icon: Icon01,
      slug: 'https://github.com/PDROJACK/injext-extension',
      title: 'Injext',
      excerpt: 'Chrome extension to use github repo content in browser.',
      openSource: true,
    },
    {
      id: 0,
      icon: Icon02,
      slug: 'https://github.com/PDROJACK/oneStopFrontend',
      title: 'OneStop',
      excerpt: 'One app to book complete journey. Built using React Native and Go',
      openSource: true,
    },
    {
      id: 0,
      icon: Icon02,
      slug: 'https://github.com/PDROJACK/rpc_fileserver',
      title: 'RPC Fileserver',
      excerpt: 'A Distributed file server with Needham-Schroeder based authentication built using gRPC',
      openSource: true,
    }
  ]


  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="font-aspekta text-xl font-[650] mb-6">Side Hustles</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                  {items01.map(item => (
                    <ProjectCard key={item.id} item={item} />
                  ))}

                </div>
              </section>
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          {/* <WidgetNewsletter /> */}
          {/* <WidgetSponsor /> */}

        </div>
      </aside>

    </div>
  )
}
