import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = (props) => {
    return (
        <div>
            <h1>Cold Hearted.</h1>
            <Card 
                itunes_song_cover_art = "track_8_song_art.png"
                itunes_song_title = "RunWay"
                itunes_album_title = "My Beautiful Dark Twisted Fantasy"
                itunes_artist_title = "Kanye West"
                itunes_genre_title = "Baroque Sophisticated Ignorance"
            />
            <Card 
                itunes_song_cover_art = "track_9_song_art.png"
                itunes_song_title = "Dark Fantasy"
                itunes_album_title = "My Beautiful Dark Twisted Fantasy"
                itunes_artist_title = "Kanye West"
                itunes_genre_title = "Baroque Sophisticated Ignorance"
            />
            <Card 
                itunes_song_cover_art = "track_10_song_art.png"
                itunes_song_title = "Hell Of A Life"
                itunes_album_title = "My Beautiful Dark Twisted Fantasy"
                itunes_artist_title = "Kanye West"
                itunes_genre_title = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

