<script setup lang="ts">
import MobilePageUI from "@/shared/ui/page-ui/MobilePageUI.vue";
import AuthWidget from "@/widgets/auth-widget/AuthWidget.vue";
import LoginWidget from "@/widgets/auth-widget/forms/login-form/LoginForm.vue";
import MobileMainBlockUI from "@/shared/ui/block-ui/MobileMainBlockUI.vue";
</script>

<template>
	<MobilePageUI>
		<MobileMainBlockUI>
			<AuthWidget/>
		</MobileMainBlockUI>
	</MobilePageUI>
</template>
