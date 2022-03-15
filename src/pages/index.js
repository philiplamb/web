import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import SEO from '@/components/Seo'
import Navigation from '@/components/Layouts/Navigation'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Project from '@/components/Project'

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Phil</title>
            </Head>

            <GuestLayout>
                <SEO title="Home | Software Developer in Leigh-on-Sea, Essex" />
                <main className="container mx-auto px-11">
                    <section className="py-10 md:py-32 md:w-2/3">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">I'm Alex Philalithes <span role="img" aria-label="wave">👋</span></h1>
                        <h2 className="text-xl md:text-2xl font-bold mb-2">This is my work</h2>
                    </section>
                    <section>
                        <h1 className='text-xl'>Projects</h1>
                        <div className='flex gap-4'>
                            <Project title="chatBot" description="This chatbot welcomes and guides you through your page." languages={["HTML", "CSS", "JS", "PHP", "Laravel"]} />
                            <Project title="chatBot" description="blabla" languages={["HTML", "CSS", "JS", "PHP", "Laravel"]} />
                        </div>
                    </section>
                </main>
            </GuestLayout>
        </>
    )
}