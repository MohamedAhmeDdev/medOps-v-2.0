import Header from "./Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from '../routes'
import { Suspense, lazy } from 'react'
import { useEffect, useRef } from "react"



function PageContent(){
    const mainContentRef = useRef(null);



    // Scroll back to top on new page load
    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
          });
      }, [])

    return(
        <div className="drawer-content flex flex-col ">
            <Header/>
            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
                <Suspense>
                        <Routes>
                            {
                                routes.map((route, key) => {
                                    return(
                                        <Route
                                            key={key}
                                            exact={true}
                                            path={`${route.path}`}
                                            element={<route.component />}
                                        />
                                    )
                                })
                            }

                        </Routes>
                </Suspense>
                <div className="h-16"></div>
            </main>
        </div> 
    )
}


export default PageContent
