import { Shield, Zap, Lock, Sparkles, Copy, RefreshCw } from "lucide-react";
import { useState, useCallback } from "react";

export default function Hero() {
  const [password, setPassword] = useState("G#2x!8qK$9mL@pW");
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const length = 16;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar: ", err);
    }
  };

  const getPasswordStrength = () => {
    if (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return { strength: "Muito Forte", color: "bg-success", width: "w-full" };
    } else if (
      password.length >= 10 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      return { strength: "Forte", color: "bg-warning", width: "w-3/4" };
    } else if (password.length >= 8) {
      return { strength: "Média", color: "bg-warning", width: "w-1/2" };
    } else {
      return { strength: "Fraca", color: "bg-error", width: "w-1/4" };
    }
  };

  const checkCriteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[!@#$%^&*]/.test(password),
  };

  const strengthInfo = getPasswordStrength();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left mb-16 lg:mb-0 lg:pr-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>100% Open Source</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Crie Senhas{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Ultra-Seguras
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-base-content/70 mb-8 leading-relaxed max-w-2xl">
                Gerador de senhas forte e criptograficamente seguro.
                <span className="font-semibold text-primary">
                  {" "}
                  Totalmente gratuito
                </span>
                , open source e sem armazenamento de dados.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-md lg:max-w-full mx-auto lg:mx-0">
                <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                  <Lock className="text-success" size={20} />
                  <span className="text-sm font-medium">
                    Criptografia Forte
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                  <Shield className="text-success" size={20} />
                  <span className="text-sm font-medium">Zero Tracking</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
                  <Zap className="text-success" size={20} />
                  <span className="text-sm font-medium">Instantâneo</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={generatePassword}
                  className="btn btn-primary btn-lg gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Zap size={22} />
                  Gerar Senha Agora
                </button>
                <a
                  href="https://github.com/beeleza/cryptify"
                  className="btn btn-outline btn-lg gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Ver no GitHub
                </a>
              </div>
            </div>

            {/* Visual Card */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="bg-base-200 rounded-2xl p-6 lg:p-8 shadow-2xl border border-base-300 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-base-100 rounded-xl p-6 mb-4 border border-base-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-base-content/60">
                      Sua Nova Senha
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={copyToClipboard}
                        className={`btn btn-ghost btn-sm btn-square ${
                          isCopied ? "text-success" : ""
                        }`}
                        title="Copiar senha"
                      >
                        {isCopied ? (
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                      <button
                        onClick={generatePassword}
                        className="btn btn-ghost btn-sm btn-square"
                        title="Gerar nova senha"
                      >
                        <RefreshCw size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="font-mono text-lg lg:text-xl font-bold text-primary bg-primary/10 p-3 rounded-lg text-center break-all">
                    {password}
                  </div>
                </div>

                {/* Password Strength */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Força da senha</span>
                      <span
                        className={`font-bold ${
                          strengthInfo.strength === "Muito Forte"
                            ? "text-success"
                            : strengthInfo.strength === "Forte"
                            ? "text-warning"
                            : strengthInfo.strength === "Média"
                            ? "text-warning"
                            : "text-error"
                        }`}
                      >
                        {strengthInfo.strength}
                      </span>
                    </div>
                    <div className="w-full bg-base-300 rounded-full h-2">
                      <div
                        className={`${strengthInfo.color} h-2 rounded-full ${strengthInfo.width} transition-all duration-300`}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          checkCriteria.length ? "bg-success" : "bg-base-300"
                        }`}
                      ></div>
                      <span>8+ caracteres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          checkCriteria.uppercase ? "bg-success" : "bg-base-300"
                        }`}
                      ></div>
                      <span>Maiúsculas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          checkCriteria.numbers ? "bg-success" : "bg-base-300"
                        }`}
                      ></div>
                      <span>Números</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          checkCriteria.symbols ? "bg-success" : "bg-base-300"
                        }`}
                      ></div>
                      <span>Símbolos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
