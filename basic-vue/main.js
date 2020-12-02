Vue.createApp({
	data() {
		return {
			goals: [],
			enteredGoal: ''
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredGoal);
			this.enteredGoal = '';
		}
	}
}).mount("#app");