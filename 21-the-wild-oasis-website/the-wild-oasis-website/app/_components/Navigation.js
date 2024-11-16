import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cabins">Cabins</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/account">Your account</Link>
                </li>
            </ul>
        </nav>
    );
}
