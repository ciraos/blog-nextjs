'use client'
import { useLayoutEffect, useState } from 'react'
import { highlight } from '@/lib/shared'

export function CodeBlock({ initial }: { initial?: JSX.Element }) {
  const [nodes, setNodes] = useState(initial)
  useLayoutEffect(() => {
    void highlight('are u OK?').then(setNodes)
  },
    [])
  return nodes ?? <p>Loading...</p>
}
