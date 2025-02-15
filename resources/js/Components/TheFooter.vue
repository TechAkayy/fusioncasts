<script setup lang="ts">
import { Head, Link, router } from "@inertiajs/vue3";

// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'TheFooter',
// 	},
// })
</script>
<template>
    <footer class="pb-24 pt-12">
        <div class="container mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="space-y-4">
                    <h3 class="text-2xl font-serif">Cafe Tee Kaapi</h3>
                    <p class="text-stone-300">
                        Bringing the finest fusion of Indian and Western flavors
                        to Melbourne.
                    </p>
                    <div class="flex space-x-4">
                        <Link
                            href="#"
                            class="text-stone-300 hover:text-primary-500"
                            ><span class="sr-only">Facebook</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="#"
                            class="text-stone-300 hover:text-primary-500"
                            ><span class="sr-only">Instagram</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div class="space-y-4">
                    <h4 class="font-semibold text-lg">Quick Links</h4>
                    <ul class="space-y-2">
                        <li>
                            <Link
                                href="/"
                                class="text-stone-300 hover:text-primary-500"
                                >Home</Link
                            >
                        </li>
                        <li>
                            <Link
                                href="/menu"
                                class="text-stone-300 hover:text-primary-500"
                                >Menu</Link
                            >
                        </li>
                        <li>
                            <Link
                                href="/about"
                                class="text-stone-300 hover:text-primary-500"
                                >About Us</Link
                            >
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                class="text-stone-300 hover:text-primary-500"
                                >Contact</Link
                            >
                        </li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-semibold text-lg">Legal</h4>
                    <ul class="space-y-2">
                        <li>
                            <Link
                                href="/privacy"
                                class="text-stone-300 hover:text-primary-500"
                                >Privacy Policy</Link
                            >
                        </li>
                        <li>
                            <Link
                                href="/terms"
                                class="text-stone-300 hover:text-primary-500"
                                >Terms of Service</Link
                            >
                        </li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="font-semibold text-lg">Contact Us</h4>
                    <address class="text-stone-300 not-italic">
                        <p>123 Coffee Lane</p>
                        <p>Melbourne, VIC 3000</p>
                        <p>Phone: (03) 9123 4567</p>
                        <p>Email: hello@teekaaapi.com</p>
                    </address>
                </div>
            </div>
            <div
                class="mt-8 pt-8 border-t border-stone-700 text-center text-stone-400"
            >
                <p>&copy; 2024 Cafe Tee Kaapi. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
<style scoped></style>
