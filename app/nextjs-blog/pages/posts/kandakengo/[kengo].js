import { useState } from 'react'

export async function getServerSideProps(context) {
    const param = context.params.kengo
    return {
        props: {
            param
        }
    }
}

export default function Kanda({param}) {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(()=>{
        console.log("comeon!")
        setIsLoading(false)
    }, 2000)
    if(isLoading) {
        return (
            <>Now Loading...</>
        )
    }
    return (
        <>
            I got parameter: {param}.
        </>
    )
}