import '@/app/_styles/globals.css';

import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';

const josefin_font = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
});

console.log(josefin_font);

export const metadata = {
    title: {
        template: 'The Wild Oasis: %s',
        default: 'The Wild Oasis: Welcome',
    },
    description: 'Luxurious cabin hotel, located im the heart of the Italian surrounded by beatiful muountains and dark forests',
};

export default function RootLayout({ children }) {
    return (
        <html lan="en">
            <body className={`${josefin_font.className} bg-primary-900 text-primary-100 min-h-screen flex flex-col`}>
                <Header />
                <div className="flex-1 px-8 py-12">
                    <main className="max-w-7xl mx-auto bg-red-300">{children}</main>
                </div>
            </body>
        </html>
    );
}
