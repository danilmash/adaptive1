const app = Vue.createApp({
    data () {
        return {
            notes: [],
            charCount: 0,
            textInput: "",
            disable: true,
        }
    },

    methods: {
        checkInput() {
            if (this.textInput.length <= 144 && this.textInput.length != 0) {
                this.charCount = this.textInput.length
                this.disable = false
            } else {
                this.charCount = this.textInput.length
                this.disable = true
            }
        },
        newNote() {
            this.notes.push({
                text: this.textInput,
                date: new Intl.DateTimeFormat('ru', {
                    year: "numeric", 
                    month: "numeric", 
                    day: "numeric", 
                    hour: "numeric", 
                    minute: "numeric"
                }).format(Date.now())
            })
            this.disable = true
            this.textInput = ""
            this.charCount = 0
        }
    },

    computed: {
        notesCount() {
            return this.notes.length;
        }
    }
})

const vm = app.mount('#app')