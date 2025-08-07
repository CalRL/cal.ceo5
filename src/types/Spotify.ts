export type Spotify = {
    timestamps: {
        start: number;
        end: number;
    }
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
    track_id: string;
}

export type SpotifyResponse = {
    success: boolean;
    spotify: Spotify;
}