import link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>
        <link href= "/api/tempo">
            <a>Acessar Página API</a>
        </link>
        </div>)
}

export default Home