import Image from "next/image"

type HabitatBGProps = {
    habitat: string
}

export default function HabitatBG({ habitat }: HabitatBGProps) {
    switch (habitat) {
        case 'waters-edge':
            return <Image src={'/static/waters-edge.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'grassland':
            return <Image src={'/static/grassland.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'mountain':
            return <Image src={'/static/mountain.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'rare':
            return <Image src={'/static/rare.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'sea':
            return <Image src={'/static/sea.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'rough-terrain':
            return <Image src={'/static/rough-terrain.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'urban':
            return <Image src={'/static/urban.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'cave':
            return <Image src={'/static/cave.webp'} alt={'bg'} height={500} width={500}></Image>
        case 'forest':
            return <Image src={'/static/forest.webp'} alt={'bg'} height={500} width={500}></Image>
    }
}