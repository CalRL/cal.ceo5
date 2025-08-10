export function getColor(status: string | null) {
    if (!status) {
        return "#747f8d";
    }

    switch (status.toLowerCase()) {
        case "online":
            return "#43b581"; // Green for online
        case "idle":
            return "#faa61a"; // Yellow for idle
        case "dnd": // Do not disturb
            return "#f04747"; // Red for DND
        default:
            return "#747f8d"; // Grey for offline or unknown
    }
}

export function getStatusString(status: string) {
    switch (status) {
        case "online":
            return "Online";
        case "idle":
            return "Idle";
        case "dnd":
            return "DND";
        case "offline":
            return "Offline";
        default:
            return "Offline";
    }
}