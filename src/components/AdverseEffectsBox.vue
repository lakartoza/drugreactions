<template>
	<div>
		<div class="alert alert-success alert-dismissible fade show" role="alert">

			<h3>Adverse Side Effects</h3>
			<p>of {{searchTerm}}</p>
			<p>
				As a service in the interest of your health, 
				we include common side effects of your RX drugs.
			</p>
			<span v-for="effect in effects">
			    {{ effect }} ––
			</span>
		</div>
		
	</div>
	
</template>

<script>
	


	export default {
		name: 'AdverseEffectsBox',
		props: {
			effects: Array,
			searchTerm: String,
		}

	}


</script>


<style scoped>
</style>