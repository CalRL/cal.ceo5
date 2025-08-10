import type {SpotifyCurrentlyPlaying} from "../types/Spotify.ts";

export function getTrackDetails(json: SpotifyCurrentlyPlaying) {
    const trackDetails = json.item;

    return trackDetails;
}