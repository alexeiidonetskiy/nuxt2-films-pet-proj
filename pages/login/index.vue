<template>
  <b-container class="mb-8 mt-8">
    <b-row>
      <b-col b-col="9">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
              ref="email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <BButton type="submit" variant="primary" class="bg-[#007bff]"
            >Submit</BButton
          >
          <BButton type="reset" variant="danger" class="bg-[#dc3545]"
            >Reset</BButton
          >
        </b-form>
        <BButton
          variant="success"
          class="bg-[#218838] m-8"
          @click="updateInputText"
          >Update input</BButton
        >
        <BCard class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </BCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    // return this.$store.state.todos.list
    return {
      form: {
        email: "email@email.com",
        name: "Alexeii",
      },

      show: true,
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$store.dispatch("auth/login", this.form);
    },
    // addTodo (e) {
    //   this.$store.commit('todos/add', e.target.value)
    //   e.target.value = ''
    // },
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
     updateInputText: async function () {
      // console.log('refs', this.$refs.email.$el);
      // const input = this.$refs.email.$el;
      this.form.email = "alexeii@al.ex";
      console.log("input.value", this.form.email);
      await this.$nextTick();
      console.log("input.value", this.form.email);
    },

    clearValues(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onReset(event) {
      event.preventDefault();

      this.$store.commit("auth/clearSession");
    },
  },
};
</script>
