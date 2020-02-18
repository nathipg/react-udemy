import React from 'react';
import Link from 'next/link';

const ErrorPage = () => (
    <div>
        <h1>Something went wrong</h1>
        <p>Go to <Link href="/"><a>Index</a></Link></p>
    </div>
);

export default ErrorPage;