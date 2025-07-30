export function SectionDivider() {
    return <div className="bg-white h-[2px]"></div>;
}

export function SectionTitle({ title }: { title: string }) {
    return <div className="font-semibold">{title}</div>;
}
