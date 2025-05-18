"use client";

import EstatisticasMentais from "@/components/EstatiscasMentais";
import ExportarJSON from "@/components/ExportarJSON";
import RedeMental from "@/components/RedeMental";
import { ReactFlowProvider } from "reactflow";
import { useState } from "react";

type TipoPensamento = "killer" | "light" | "misto" | "neutro";

interface Pensamento {
  texto: string;
  tipo: TipoPensamento;
}

function SimuladorPage() {
  const [pensamento, setPensamento] = useState("");
  const [resultado, setResultado] = useState("");
  const [historico, setHistorico] = useState<Pensamento[]>([]);

  function analisarPensamento(texto: string): {
    resultado: string;
    tipo: TipoPensamento;
  } {
    const palavrasNegativas = [
      "medo",
      "raiva",
      "tristeza",
      "ódio",
      "culpa",
      "vergonha",
      "culpa excessiva",
      "inveja",
      "orgulho tóxico",
      "raiva descontrolada",
      "desesperança",
      "vitimismo",
      "críticas internas destrutivas",
      "ciúmes excessivos",
      "perfeccionismo paralisante",
    ];
    const palavrasPositivas = [
      "amor",
      "alegria",
      "gratidão",
      "esperança",
      "confiança",
      "compaixão",
      "perseverança",
      "capacidade de perdoar",
      "resiliência",
      "coragem",
      "paciência",
      "generosidade",
      "aceitação dos proprios limites",
      "desejo de aprender",
      "confiança em si e nos outros",
      "flexibilidade emocional",
    ];

    const textoLower = texto.toLowerCase();
    const temNegativa = palavrasNegativas.some((p) => textoLower.includes(p));
    const temPositiva = palavrasPositivas.some((p) => textoLower.includes(p));

    if (temNegativa && !temPositiva) {
      return {
        resultado: "Janela Killer (pensamento negativo)",
        tipo: "killer",
      };
    } else if (temPositiva && !temNegativa) {
      return { resultado: "Janela Light (pensamento positivo)", tipo: "light" };
    } else if (temPositiva && temNegativa) {
      return {
        resultado: "Pensamento misto (pode gerar conflito interno)",
        tipo: "misto",
      };
    } else {
      return {
        resultado: "Neutro (não identificado como positivo ou negativo)",
        tipo: "neutro",
      };
    }
  }

  function handleEnviar() {
    if (!pensamento.trim()) return;

    const analise = analisarPensamento(pensamento);
    setResultado(analise.resultado);

    const novoPensamento: Pensamento = {
      texto: pensamento,
      tipo: analise.tipo,
    };

    setHistorico((prev) => [novoPensamento, ...prev]);
    setPensamento("");
  }

  function corTipo(tipo: TipoPensamento): string {
    switch (tipo) {
      case "killer":
        return "bg-red-100 text-red-700 border-red-300";
      case "light":
        return "bg-green-100 text-green-700 border-green-300";
      case "misto":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Simulador de Pensamentos</h1>

      <input
        type="text"
        placeholder="Digite um pensamento..."
        value={pensamento}
        onChange={(e) => setPensamento(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-0"
      />

      <button
        onClick={handleEnviar}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Analisar
      </button>

      {resultado && (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <strong>Resultado:</strong> {resultado}
        </div>
      )}

      {historico.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Histórico de Pensamentos</h2>
          <div className="flex flex-wrap gap-2">
            {historico.map((p, index) => (
              <div
                key={index}
                className={`px-3 py-2 border rounded ${corTipo(
                  p.tipo
                )} text-sm`}
              >
                {p.texto}
              </div>
            ))}
          </div>
        </div>
      )}

      <ReactFlowProvider>
        <RedeMental pensamentos={historico} />
      </ReactFlowProvider>

      <EstatisticasMentais pensamentos={historico} />
      <ExportarJSON pensamentos={historico} />
    </div>
  );
}

export default SimuladorPage;
