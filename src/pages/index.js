import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Project from '@/components/Project'
import ChatBot from '@/components/ChatBot/ChatBot'

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Phil</title>
            </Head>

            <GuestLayout>
                <main className="container mx-auto px-11">
                    <section className="py-10 md:py-32 md:w-2/3">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">I'm Alex Philalithes <span role="img" aria-label="wave">👋</span></h1>
                        <p className="text-xl md:text-2xl font-bold mb-2">This is my work</p>
                    </section>
                    <section className="md:w-2/3">
                        <Link href="/learn">
                            <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                <svg className="w-6 h-6 mr-3 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                Learn about me
                            </button>
                        </Link>
                    </section>
                    <section>
                        <h1 className='text-xl'>Projects</h1>
                        <div className='flex gap-4'>
                            <Project title="chatBot" description="This chatbot welcomes and guides you through your page." languages={["HTML", "CSS", "JS", "PHP", "Laravel"]} />
                            <Project title="chatBot" description="blabla" languages={["HTML", "CSS", "JS", "PHP", "Laravel"]} />
                        </div>
                    </section>
                </main>
                <ChatBot/>
            </GuestLayout>
        </>
    )
}