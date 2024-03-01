import { useEffect, useRef } from "react"


const useDocumentTitle = (newTitle: string, prevailOnUnmount: boolean = false) => {
    const defaultTitle = useRef(document.title);

    console.log(defaultTitle);
    
    
    useEffect(() => {
        document.title = newTitle
    }, [newTitle])

    useEffect(() => {
        if(!prevailOnUnmount) {
            document.title = defaultTitle.current
        }
    }, [])
}

export default useDocumentTitle