import Head from 'next/head'
import Footer from './Footer'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default GuestLayout
