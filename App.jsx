import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = (props) => {
    return (
        <div>
            <h1>Cold Hearted.</h1>
            <Card 
                itunes_song_cover_art = "track_8_song_cover_art.png"
                itunes_song_title = "RunWay"
                itunes_album_title = "My Beautiful Dark Twisted Fantasy"
                itunes_artist_title = "Kanye West"
                itunes_genre_icon = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

