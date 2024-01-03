import Layout from "@/components/Layout/Layout";
import CategorySection from "./components/_CategorySection";
import SliderMovieSection from "./components/_SliderMovieSection";

export const metadata = {
    title: 'Home',
    description: 'This is home page.',
}

export default function Home() {
    return (
        <Layout>
            <CategorySection />

            {['now-playing', 'popular', 'top-rated', 'upcoming'].map((type) => (
                <SliderMovieSection key={type} type={type} />
            ))}
        </Layout>
    )
}
