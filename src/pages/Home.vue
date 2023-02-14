<script setup>
import Swal from 'sweetalert2'
import axios from 'axios'
</script>

<template>
  <div class="container">
    <!-- heading -->
    <div class="titleContainer">
      <h1>Are you a cat lover and hoping to learn more about cats?</h1>
      <span class="paragraph"
        >Browse through our <b class="logoName"> CATPEDIA </b> and learn more
        about them!
      </span>
    </div>

    <div class="buttonContainer">
      <button class="button" @click="getCatPic">See another cat!</button>
    </div>

    <div class="imageContainer">
      <span v-if="isLoading" class="text">Loading...</span>
      <img v-else class="image" :src="imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      isLoading: true,
    }
  },
  created() {
    console.log('Here')
    this.getCatPic()
  },
  methods: {
    async getCatPic() {
      this.isLoading = true
      try {
        Swal.fire({
          title: 'Getting next picture',
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
        axios.defaults.headers.common['Authorization'] =
          import.meta.env.VITE_API_KEY
        let response = await axios.get(
          'https://api.thecatapi.com/v1/images/search',
          {
            params: {
              limit: 1,
              size: 'full',
            },
          }
        )
        this.imageUrl = response.data[0].url
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
.titleContainer {
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container h1 {
  color: #db205f;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph {
  font-weight: bold;
  font-size: 40px;
  padding-left: 80px;
  text-align: center;
}
.logoName {
  color: lightseagreen;
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

.imageContainer {
  display: flex;
  justify-content: center;
}

.text {
  font-family: cursive;
  font-size: 20px;
  font-weight: bold;
}

.image {
  max-width: 750px;
  max-height: 400px;
  -webkit-box-shadow: 5px 5px 50px 50px rgba(175, 211, 228, 0.7);
  box-shadow: 5px 5px 50px 50px rgba(175, 211, 228, 0.7);
}
</style>
