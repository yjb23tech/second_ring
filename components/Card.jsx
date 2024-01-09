import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="itunes-song-card">
            <img src={`images/${props.itunes_song_cover_art}`} className="itunes-song-cover-art" />
            <div className="itunes-song-details">
                <h1>{props.itunes_song_title}</h1>
                <div className="info-group">
                    <img src={album_icon} />
                    <p>{props.itunes_album_title}</p>
                </div>
                <div className="info-group">
                    <img src={artist_icon} />
                    <p>{props.itunes_artist_title}</p>
                </div>
                <div className="info-group">
                    <img src={genre_icon} />
                    <p>{props.itunes_genre_title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card; 