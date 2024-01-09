import { createRoot } from "react-dom/client"

const App = (props) => {
    return (
        <div>
            <h1>Cold Hearted.</h1>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

