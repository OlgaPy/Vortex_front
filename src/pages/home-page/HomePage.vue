<script setup lang="ts">
import {ApplicationOrientations, useApplicationOrientationStore} from "@/shared/stores/ApplicationOrientationStore";
import HomeDesktopPage from "./ui/HomeDesktopPage.vue";
import HomeMobilePage from "./ui/HomeMobilePage.vue";

const appOrientation = useApplicationOrientationStore();
</script>

<template>
	<HomeDesktopPage v-if="appOrientation.orientation === ApplicationOrientations.DESKTOP"/>
	<HomeMobilePage v-else-if="appOrientation.orientation === ApplicationOrientations.MOBILE"/>
</template>
