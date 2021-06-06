Vue.createApp({
	data() {
		return {
			goals: [],
			enteredGoal: ''
		};
	},
	methods: {
		addGoal() {
			if(this.enteredGoal) {
				this.goals.push(this.enteredGoal);
				this.enteredGoal = '';
			}
		},
		clearGoal() {
			this.goals = [];
		}
	}
}).mount("#app");