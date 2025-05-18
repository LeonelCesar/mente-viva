'use client'

interface Pensamento {
  texto: string
  tipo: 'killer' | 'light' | 'misto' | 'neutro'
}

interface Props {
  pensamentos: Pensamento[]
}

 function ExportarJSON({ pensamentos }: Props) {
  function exportarComoJson() {
    const blob = new Blob([JSON.stringify(pensamentos, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'pensamentos.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  if (pensamentos.length === 0) return null

  return (
    <button
      onClick={exportarComoJson}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
    >
      📤 Exportar pensamentos (.json)
    </button>
  )
}

export default ExportarJSON;
