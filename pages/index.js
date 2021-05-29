import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/api/tempo">
            <a>Acessar Página API</a>
        </Link>
    </div>)
}

export default Home