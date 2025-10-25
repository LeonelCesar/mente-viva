'use client'

import React from 'react'
import ReactFlow, { Background, Controls, Node, Edge } from 'reactflow'
import 'reactflow/dist/style.css'

interface Pensamento {
  texto: string
  tipo: 'killer' | 'light' | 'misto' | 'neutro'
} 

interface Props {
  pensamentos: Pensamento[]
}

 function RedeMental({ pensamentos }: Props) {
  const nodes: Node[] = pensamentos.map((p, index) => ({
    id: String(index),
    position: { x: Math.random() * 400, y: Math.random() * 300 },
    data: { label: p.texto },
    style: {
      background:
        p.tipo === 'killer'
          ? '#fecaca'
          : p.tipo === 'light'
          ? '#bbf7d0'
          : p.tipo === 'misto'
          ? '#fef9c3'
          : '#e5e7eb',
      border: '1px solid #ccc',
      padding: 10,
      borderRadius: 8,
    },
  }))

  const edges: Edge[] = pensamentos.slice(1).map((_, index) => ({
    id: `e${index}-${index + 1}`,
    source: String(index),
    target: String(index + 1),
    animated: true,
    style: { stroke: '#888' },
  }))

  return (
    <div className="h-[400px] mt-6 border rounded">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default RedeMental;
