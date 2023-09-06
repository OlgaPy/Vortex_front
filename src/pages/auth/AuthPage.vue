<script setup lang="ts">
import MobilePageUI from "@/shared/ui/page-ui/MobilePageUI.vue";
import LoginWidget from "@/widgets/LoginWidget.vue";
import MobileMainBlockUI from "@/shared/ui/block-ui/MobileMainBlockUI.vue";
</script>

<template>
	<MobilePageUI>
		<MobileMainBlockUI>
			<LoginWidget/>
		</MobileMainBlockUI>
	</MobilePageUI>
</template>
