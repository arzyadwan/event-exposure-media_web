import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            EVENT<span className="text-blue-500">EXPOSURE</span>
          </h2>
          <p className="text-gray-400 max-w-sm">
            Mitra strategis Anda untuk eksekusi event yang presisi, produksi kreatif, dan transformasi digital yang terukur.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-6 text-blue-400">Services</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white">Event Organizer</Link></li>
            <li><Link href="#" className="hover:text-white">Wedding Production</Link></li>
            <li><Link href="#" className="hover:text-white">Web Development</Link></li>
            <li><Link href="#" className="hover:text-white">Social Media</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-6 text-blue-400">Connect</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} /> hello@eventexposure.id
            </li>
            <li className="flex gap-4 mt-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition">
                <Linkedin size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Event Exposure Media. All rights reserved.
      </div>
    </footer>
  );
}