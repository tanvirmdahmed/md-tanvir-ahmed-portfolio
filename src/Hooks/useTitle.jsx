import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Tanvir Portfolio`
    }, [title])
}

export default useTitle;