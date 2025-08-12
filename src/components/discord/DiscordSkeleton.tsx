export function DiscordSkeleton() {
    return (
        <div className="w-[55%] bg-[#2C2F33] rounded-3xl p-4 text-white">
            <div className="flex space-x-4 items-center pb-2">
                {/* avatar skeleton */}
                <div className="rounded-full border-4 border-slate-600 w-[96px] h-[96px] bg-gray-200 animate-pulse" />
                {/* status text skeleton */}
                <div className="flex-1">
                    <div className="h-7 w-40 mt-2 rounded bg-gray-200 animate-pulse" />
                </div>
            </div>
            {/* optional: activities skeleton bar(s) */}
            <div className="h-5 w-3/4 mt-3 rounded bg-gray-200 animate-pulse" />
            <div className="h-5 w-1/2 mt-2 rounded bg-gray-200 animate-pulse" />
        </div>
    );
}