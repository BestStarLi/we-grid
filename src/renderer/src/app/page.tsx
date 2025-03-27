import { useState } from 'react'
import { AppSidebar } from '../components/app-sidebar'
import MapComponent from '@renderer/components/MapEditor'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@renderer/components/ui/breadcrumb'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@renderer/components/ui/accordion'
import { House, Map } from 'lucide-react'
import { Separator } from '@renderer/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@renderer/components/ui/sidebar'

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState('home')

  const handleBreadcrumbClick = (page: string) => {
    setCurrentPage(page)
    setSelectedBreadcrumb(page)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <House size={18} />
                  <BreadcrumbLink
                    href="#"
                    onClick={() => handleBreadcrumbClick('home')}
                    className={selectedBreadcrumb === 'home' ? 'text-blue-500' : ''}
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem
                  onClick={() => handleBreadcrumbClick('map')}
                  className="cursor-pointer"
                >
                  <Map size={18} />
                  <BreadcrumbPage className={selectedBreadcrumb === 'map' ? 'text-blue-500' : ''}>
                    Map
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="min-h-[100vh] flex-1 overflow-hidden">
            {currentPage === 'home' && (
              <div className="p-2">
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-center text-4xl font-bold ml-4">Learn about We-Grid</h2>
                </div>
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is We-Grid?</AccordionTrigger>
                    <AccordionContent>
                      We-Grid is designed to facilitate collaboration among multiple users in
                      completing the task of dividing grid meshes and generating processing data.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How to use We-Grid?</AccordionTrigger>
                    <AccordionContent>Not filled in yet</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Where can I get the source?</AccordionTrigger>
                    <AccordionContent>
                      We-Grid is provided by the organization called world-in-progress on GitHub
                      <a
                        href="https://github.com/world-in-progress/we-grid"
                        style={{ color: 'blue', display: 'block' }}
                      >
                        https://github.com/world-in-progress/we-grid
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
            {currentPage === 'map' && <MapComponent />}
            <div style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
