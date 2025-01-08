import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 ">
      <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 text-6xl animate-bounce mb-4" />
      <h2 className="text-4xl font-bold mb-2">Not Found</h2>
      <p className="text-lg text-gray-600 mb-4">Could not find requested resource</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
        Return Home
      </Link>
    </div>
  );
}