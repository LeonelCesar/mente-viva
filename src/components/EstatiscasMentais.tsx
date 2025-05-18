'use client'

interface Pensamento {
  texto: string
  tipo: 'killer' | 'light' | 'misto' | 'neutro'
}

interface Props {
  pensamentos: Pensamento[]
}

 function EstatisticasMentais({ pensamentos }: Props) {
  const total = pensamentos.length
  const counts = {
    killer: 0,
    light: 0,
    misto: 0,
    neutro: 0,
  }

  pensamentos.forEach(p => {
    counts[p.tipo]++
  })

  function percentagem(tipo: keyof typeof counts): string {
    if (total === 0) return '0%'
    return ((counts[tipo] / total) * 100).toFixed(1) + '%'
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded border">
      <h2 className="text-lg font-semibold mb-2">📊 Estatísticas Emocionais</h2>
      <ul className="space-y-1 text-sm">
        <li>🧠 Total de pensamentos: <strong>{total}</strong></li>
        <li>🔴 Negativos (killer): <strong>{counts.killer}</strong> ({percentagem('killer')})</li>
        <li>🟢 Positivos (light): <strong>{counts.light}</strong> ({percentagem('light')})</li>
        <li>🟡 Mistos: <strong>{counts.misto}</strong> ({percentagem('misto')})</li>
        <li>⚪ Neutros: <strong>{counts.neutro}</strong> ({percentagem('neutro')})</li>
      </ul>
    </div>
  )
}

export default EstatisticasMentais;
