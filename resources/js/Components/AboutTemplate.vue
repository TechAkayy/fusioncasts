<script setup lang="ts">
import siteMeta from "../../../app/site";
const { description } = siteMeta;
</script>
<template>
    <div class="container mx-auto px-4 py-24 relative">
        <div class="flex flex-wrap items-center justify-center">
            <div
                class="mx-auto p-4 rounded-2xl w-full sm:w-4/5 lg:w-5/12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
            >
                <div class="flex flex-wrap justify-between sm:flex-nowrap">
                    <div class="p-5 text-center w-full whitespace-nowrap">
                        <h5>Meta-framework</h5>
                        <p class="text-primary-600 dark:text-primary-200">
                            Astro
                        </p>
                    </div>
                    <div
                        class="hidden items-center justify-center my-4 relative w-1 sm:flex"
                    >
                        <span
                            class="-ml-px absolute h-full w-0.5 bg-neutral-50 dark:bg-neutral-900"
                            aria-hidden="true"
                        />
                    </div>
                    <div
                        class="flex h-2 items-center justify-center my-4 relative w-full sm:hidden"
                    >
                        <span
                            class="-ml-px absolute w-full h-0.5 bg-neutral-50 dark:bg-neutral-900"
                            aria-hidden="true"
                        />
                    </div>
                    <div class="p-5 text-center w-full whitespace-nowrap">
                        <h5>UI-framework</h5>
                        <p class="text-primary-600 dark:text-primary-200">
                            Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
            <div
                class="mt-4 mx-auto px-2 py-4 text-center w-full sm:w-4/5 lg:mt-0 lg:text-left lg:w-5/12"
            >
                <h3 class="capitalize mb-2">About This Template</h3>
                <h6
                    class="capitalize mb-2 text-primary-600 dark:text-primary-200"
                >
                    {{ description }}
                </h6>
                <p class="mb-6 pt-3">
                    This is a starter template that pre-includes the
                    <a
                        class="font-mono text-sm underline text-primary-600 dark:text-primary-200"
                        target="_blank"
                        external
                        href="https://www.npmjs.com/package/@pinegrow/astro-module"
                        >Pinegrow Astro Module</a
                    >
                    <span>, </span>
                    <a
                        class="font-mono text-sm underline text-primary-600 dark:text-primary-200"
                        target="_blank"
                        external
                        href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
                        >Pinegrow Tailwind CSS Plugin</a
                    >
                    that enables you to visually design your Vue single-file
                    components in Vue Designer.
                </p>
                <div class="flex justify-center lg:justify-start">
                    <BaseButton
                        label="Quick Start >"
                        size="lg"
                        to="/quick-start/index"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
