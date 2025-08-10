export type LanyardResponse = {
    data: {
        kv: unknown;
        discord_user: {
            id: string;
            username: string;
            avatar: string;
            discriminator: string;
            clan: unknown | null; // todo
            primary_guild: unknown | null; // todo
            collectibles: unknown | null; // todo
            bot: boolean
            global_name: string;
            display_name: string;
            public_flags: number;
            display_name_styles: unknown | null // todo
        };
        activities: Activity[];
        discord_status: string;
        active_on_discord_web: boolean;
        active_on_discord_desktop: boolean;
        active_on_discord_mobile: boolean;
        active_on_discord_embedded: boolean;
        listening_to_spotify: boolean;
        spotify: Spotify | null;
    }
    success: boolean;
}

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

export type Activity = {
    id: string;
    name: string;
    type: number;
    state?: string;
    metadata: {};
    details?: string;
    application_id: string;
    timestamps: {
        start: number;
    },
    assets?: {
        large_image?: string;
        large_text?: string;
        small_image?: string;
        small_text?: string;
    }
    created_at: number;
    platform: string;
}


