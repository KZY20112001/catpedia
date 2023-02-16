<script setup>
import Swal from 'sweetalert2'
import axios from 'axios'
</script>

<template>
  <div class="container">
    <div class="p-container">
      <p>Craving for Fun Facts?</p>
      <p>Enjoy some random facts about these fuzzy babies!</p>
    </div>
    <div class="buttonContainer">
      <button class="button" @click="getCatFact">Get another fun fact!!</button>
    </div>

    <div class="factContainer">
      <span v-if="isLoading" class="text">Loading...</span>
      <span v-else class="paragraph">
        {{ fact }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fact: '',
      isLoading: true,
    }
  },
  created() {
    this.getCatFact()
  },
  methods: {
    async getCatFact() {
      this.isLoading = true
      try {
        Swal.fire({
          title: 'Getting next fact',
          text: 'Please enjoy this cute gif while we are fetching from API...',
          position: 'top',
          width: 500,
          timer: 2000,
          padding: '20px',
          background: 'lightcyan',
          showConfirmButton: false,
          backdrop: `
                      rgba(29, 189, 218,0.8)
                      url("https://catgifpage.com/wp-content/uploads/2022/06/Where-is-the-ball.gif")
                      center
                      no-repeat
                    `,
        })
        // axios.defaults.headers.common['Authorization'] =
        //   import.meta.env.VITE_API_KEY
        let response = await axios.get(
          'https://catfact.ninja/fact?max_length=300'
        )
        this.fact = response.data.fact
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(232, 247, 247);
  height: 100vh;
}

.p-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.p-container p {
  font-family: Poppins;
  font-size: 40px;
  color: lightseagreen;
  font-weight: 600;
}

.buttonContainer {
  display: flex;
  justify-content: center;
}

.button {
  font-family: Poppins;
  color: whitesmoke;
  background-color: lightcoral;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 50px;
  padding: 10px;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-2px);
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
}

.factContainer {
  display: flex;
  justify-content: center;
}

.paragraph {
  font-size: 36px;
  max-width: 700px;
  border-radius: 10px;
  font-weight: 400;
  background-color: lightblue;
  color: white;
  font-family: Poppins;
}
</style>
