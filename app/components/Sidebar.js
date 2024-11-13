import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTachometerAlt, FaList, FaTags, FaCog } from "react-icons/fa"; // Icons

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-4 position-fixed vh-100"
      style={{ width: "250px", boxShadow: "4px 0px 8px rgba(0,0,0,0.2)" }}
    >
      <div className="d-flex flex-column">
        <div className="mb-3">
          <Link
            href="/dashboard"
            className="nav-link text-white p-3 rounded d-flex align-items-center mb-2 hover-bg"
            style={{ border: "1px solid #444" }}
          >
            <FaTachometerAlt className="mr-3" /> Dashboard
          </Link>
        </div>
        <div className="mb-3">
          <Link
            href="/posts"
            className="nav-link text-white p-3 rounded d-flex align-items-center mb-2 hover-bg"
            style={{ border: "1px solid #444" }}
          >
            <FaList className="mr-3" /> Posts
          </Link>
        </div>
        <div className="mb-3">
          <div
            className="nav-link text-white p-3 rounded d-flex align-items-center mb-2 hover-bg"
            style={{ border: "1px solid #444" }}
          >
            <FaTags className="mr-3" /> Categories
          </div>
        </div>
        <div className="mb-3">
          <div
            className="nav-link text-white p-3 rounded d-flex align-items-center mb-2 hover-bg"
            style={{ border: "1px solid #444" }}
          >
            <FaCog className="mr-3" /> Settings
          </div>
        </div>
      </div>
    </div>
  );
}
