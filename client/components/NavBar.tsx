import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          MovieFinder
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a
            href="https://github.com/sadzebra"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
