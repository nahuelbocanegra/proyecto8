import Nav from "./Nav"
import Footer from "./Footer"

function Layout({children}) {
    return(
        <>
            <Nav></Nav>

                 {children}

            <Footer></Footer>
        
        </>
    )
}

export default Layout