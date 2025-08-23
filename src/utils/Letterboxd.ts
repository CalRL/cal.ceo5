import {parseStringPromise} from 'xml2js';
import {type LetterboxdParsed} from "../types/LetterboxdParsed.ts";
import axios from "axios";

export class Letterboxd {
    private userId: string;
    constructor(userId: string) {
        this.userId = userId;
    }

    getURL() {
        return `https://letterboxd.com/${this.userId}/rss`;
    }

    async getRSS() {
        const url = this.getURL();
        return await axios.get(url);
    }

    async parseRSS(): Promise<LetterboxdParsed[]> {
        try {
            const rssResponse = await this.getRSS();
            const rss = await parseStringPromise(rssResponse.data, { explicitArray: false });

            // Navigate XML structure
            const items = rss?.rss?.channel?.item ?? [];
            const movies = Array.isArray(items) ? items : [items];

            const topEight = movies.slice(0, 8).map(item => {
                const link: string = item.link || '';

                const description: string = item.description || '';

                const imgMatch: RegExpMatchArray | null = description.match(/<img[^>]+src="([^">]+)"/);
                const image_url: string = imgMatch ? imgMatch[1] : "";
                let strippedLink: string = link;
                if(link) {
                    strippedLink = link.replace("/calrl", "")
                }
                const title = item["letterboxd:filmTitle"];
                const rating: string = item['letterboxd:memberRating'];
                const ratingNumber: number = Number.parseFloat(rating);
                const info: LetterboxdParsed = {
                    title,
                    link: strippedLink,
                    image_url,
                    rating: ratingNumber,
                }

                return info;
            });

            return topEight;
        } catch (error) {
            console.error("Error fetching letterboxd data:", error);
            return [];
        }
    }
}