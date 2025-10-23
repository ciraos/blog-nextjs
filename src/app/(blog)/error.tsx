'use client' // Error boundaries must be Client Components
import { useEffect } from 'react'

import {
    Button
} from "antd";
import "@ant-design/v5-patch-for-react-19";

export default function Error({ error, reset, }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                type='primary'
            >
                再试一次
            </Button>
        </div>
    )
}
