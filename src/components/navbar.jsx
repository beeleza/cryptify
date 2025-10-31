import { Lock, Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-base-100 border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Lock className="text-primary" size={24} />
          <span className="font-bold text-lg">CryptiFY</span>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-primary gap-2">
            <Lock size={16} />
            Gerar Senha
          </button>

          <a
            href="https://github.com/beeleza/cryptify"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-ghost gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
