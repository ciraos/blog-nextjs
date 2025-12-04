'use client';
import { useEffect } from 'react'
import {
    Button
} from "antd";


export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>出了点问题！</h2>
            <Button
                onClick={() => reset()}
                type='primary'
            >
                再试一次
            </Button>
        </div>
    )
}
