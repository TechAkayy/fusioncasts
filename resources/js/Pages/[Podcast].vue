<php>
use function \Fusion\{prop};
use \App\Models\Podcast;

$slug = prop()->fromRoute('podcast');

$podcastsRaw = prop(fn() => Podcast::all());

</php>
<script setup lang="ts">
import { useFusion } from "$fusion/Pages/Index";

const { podcastsRaw, slug } = useFusion(["podcastsRaw", "slug"]);

const podcastsWithSlug = computed(() => {
    return podcastsRaw.value.map((podcast) => ({
        ...podcast,
        slug: podcast.image.split("/").pop().replace(".jpg", ""), // /art/art-of-product.jpg
    }));
});

const podcast = computed(() => {
    return podcastsWithSlug.value.find(
        (podcast) => podcast.slug === slug.value
    );
});
</script>
<template>
    <AppLayout>
        <article class="max-w-4xl mx-auto px-4 py-12 lg:py-16">
            <div class="space-y-8">
                <img
                    :src="podcast.image"
                    :alt="podcast.title"
                    class="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div class="space-y-4">
                    <div class="flex items-center gap-4 text-gray-600">
                        <span class="text-sm">{{
                            new Date(podcast.updated_at).toDateString()
                        }}</span
                        ><span class="text-sm">By {{ podcast.author }}</span>
                    </div>
                    <h1
                        class="text-4xl lg:text-5xl font-serif font-bold text-gray-900"
                    >
                        {{ podcast.title }}
                    </h1>
                    <div class="prose max-w-none text-gray-800">
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Experience the perfect blend of East meets West at
                            Cafe Tee Kaapi, where traditional Indian spices
                            dance with contemporary Melbourne coffee culture.
                            Our master baristas craft the perfect cup of
                            single-origin coffee while our chai specialists
                            blend aromatic masalas for that authentic taste of
                            India. This week, we're featuring our signature
                            Masala Cold Brew - a refreshing fusion that combines
                            smooth cold-extracted coffee with subtle notes of
                            cardamom, cinnamon, and star anise. Pair it with our
                            popular Butter Chicken Croissant for a truly
                            cross-cultural culinary adventure.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </AppLayout>
</template>
