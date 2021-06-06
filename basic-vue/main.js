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
			if (!this.enteredGoal) return;
			this.goals.push(this.enteredGoal);
			this.enteredGoal = '';
		}
	}
}).mount("#app");