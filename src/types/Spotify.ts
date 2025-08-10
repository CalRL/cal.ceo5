export type DiscordSpotify = {
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

export type DiscordSpotifyResponse = {
    success: boolean;
    spotify: DiscordSpotify;
}

export type SpotifyExternalUrls = {
    spotify: string;
};

export type SpotifyImage = {
    url: string;
    height: number;
    width: number;
};

export type SpotifyArtist = {
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;
};

export type SpotifyAlbum = {
    album_type: string;
    artists: SpotifyArtist[];
    available_markets: string[];
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: 'album';
    uri: string;
};

export type SpotifyTrack = {
    album: SpotifyAlbum;
    artists: SpotifyArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
    };
    external_urls: SpotifyExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: 'track';
    uri: string;
};

export type SpotifyContext = {
    external_urls: SpotifyExternalUrls;
    href: string;
    type: string;
    uri: string;
};

export type SpotifyActions = {
    disallows: Record<string, boolean>;
};

export type SpotifyCurrentlyPlaying = {
    is_playing: boolean;
    timestamp: number;
    context: SpotifyContext | null;
    progress_ms: number;
    item: SpotifyTrack | null;
    currently_playing_type: string;
    actions: SpotifyActions;
};

export type SpotifyResponse = {
    data: SpotifyCurrentlyPlaying;
    success: boolean;
    playing: true;
}
