import { pages } from "@/constants/sitemap-links";
import { MetadataRoute } from "next";

export default function GET(): MetadataRoute.Sitemap {
    return pages.map((page) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${page.path}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page.priority,
    }));
}
