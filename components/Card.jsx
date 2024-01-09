import album_icon from "../public/album_icon.png"
import artist_icon from "../public/artist_icon.png"
import genre_icon from "../public/artist_icon.png"

const Card = (props) => {
    return (
        <div>
            <div>
                <img src={`images/${props.itunes_song_cover_art}`} className="itunes-song-cover-art"/>
            </div>
            <div>
                <h1>{props.itunes_song_title}</h1>
                <div>
                    <img src={album_icon} />
                    <p>{props.itunes_album_title}</p>
                </div>
                <div>
                    <img src={artist_icon} />
                    <p>{props.itunes_artist_title}</p>
                </div>
                <div>
                    <img src={genre_icon} />
                    <p>{props.itunes_genre_title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 