<php>
use function \Fusion\{prop, expose};
use \App\Models\Podcast;

$search = prop('');
$podcasts = prop(function() use ($search) {
    if ($search) {
        return Podcast::query()->where('title', 'like', "%$search%")->get();
    }

    return Podcast::all();
})->readonly();

$podcastsRaw = prop(fn() => Podcast::all());

expose(favorite: function(Podcast $podcast) {
    return response()->json($podcast->toggleFavorite());
});
$name = prop('Aaron');

</php>
<script setup lang="ts">
import { useFusion } from "$fusion/Pages/Index";
import { Head, Link, router } from "@inertiajs/vue3";

const { podcastsRaw, name } = useFusion(["podcastsRaw", "name"]);

const podcastsWithSlug = computed(() => {
    return podcastsRaw.value.map((podcast) => ({
        ...podcast,
        slug: podcast.image.split("/").pop().replace(".jpg", ""), // /art/art-of-product.jpg
    }));
});
</script>
<template>
    <AppLayout>
        <section class="py-16 bg-stone-50">
            <div class="container mx-auto px-4">
                <h2
                    class="text-4xl font-serif text-stone-800 mb-12 text-center"
                >
                    Latest From Our Blog
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <article
                        class="bg-white rounded-lg shadow-md overflow-hidden"
                        v-for="(podcast, index) in podcastsWithSlug"
                        :key="index"
                    >
                        <div class="flex h-60">
                            <img
                                :src="podcast.image"
                                class="object-cover w-full"
                            />
                        </div>
                        <div class="p-6">
                            <p class="text-orange-600 text-sm mb-2">
                                {{
                                    new Date(podcast.updated_at).toDateString()
                                }}
                            </p>
                            <h3 class="text-xl font-serif text-stone-800 mb-3">
                                {{ podcast.title }}
                            </h3>
                            <p class="text-stone-600 mb-4">
                                Discover the secrets behind creating the perfect
                                pour-over coffee, from selecting the right beans
                                to mastering the technique.
                            </p>
                            <Link
                                class="inline-block text-orange-600 hover:text-orange-700"
                                :href="podcast.slug"
                                >Read More →</Link
                            >
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>
