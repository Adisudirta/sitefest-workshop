import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer py-3 text-center mt-5 mb-4">
      <p className="m-0 text-secondary">Create with ❤️‍🔥 and 🖐 in Denpasar</p>
      <small>
        <a
          href="https://github.com/primakara-developers"
          target="blank"
          className="text-primary"
        >
          Primakara Developers {new Date().getFullYear()}
        </a>
      </small>
    </footer>
  );
}
