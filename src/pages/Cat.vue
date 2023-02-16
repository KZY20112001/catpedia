<script setup>
import axios from 'axios'
import Swal from 'sweetalert2'
import SearchDropdown from 'search-dropdown-vue'
</script>

<template>
  <div class="container">
    <div class="p-container">
      <p>Want to know more about a specific cat?</p>
      <p>Search among our selected variety of breeds</p>
    </div>

    <div class="select-menu">
      <font-awesome-icon class="img" icon="fa-solid fa-magnifying-glass" />
      <SearchDropdown
        :options="cats"
        v-on:selected="onSelectedOption"
        placeholder="Search a cat breed"
        class="drop-down"
        name="userChoice"
      >
      </SearchDropdown>
    </div>

    <div class="catCard">
      <div class="imgContainer">
        <img class="catImg" :src="image.url" />
      </div>

      <div class="catDetails">
        <h1 class="title">{{ userChoice.name }}</h1>
        <div class="description">
          <p>{{ userChoice.description }}</p>
        </div>

        <a class="wiki" :href="userChoice.wikipedia_url"> Wikipedia </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {},

    onSelectedOption(payload) {
      this.userChoice = payload
    },
    async getCats() {
      this.isLoading = true
      try {
        axios.defaults.headers.common['Authorization'] =
          import.meta.env.VITE_API_KEY
        let response = await axios.get('https://api.thecatapi.com/v1/breeds/')
        this.cats = response.data
        this.userChoice = this.cats[9] //initial start value
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
        this.getImage()
      }
    },
    async getImage() {
      this.isLoading = true
      try {
        let params = {
          id: this.userChoice.id,
          limit: 1,
        }
        Swal.fire({
          title: 'Getting cat picture...',
          text: 'Please enjoy this cute gif while we are fetching from API...',
          position: 'top',
          width: 550,
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
          { params: params }
        )
        this.image = response.data[0]
      } catch (err) {
        console.log(err)
      } finally {
        console.log(this.userChoice)
        this.isLoading = false
      }
    },
  },
  data() {
    return {
      isLoading: true,
      image: {}, //image of a selected cat
      cats: [], //drop down list for cat breeds
      userChoice: {},
    }
  },
  created() {
    this.getCats()
  },
  watch: {
    userChoice: function () {
      this.getImage()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(232, 247, 247);
  height: 100%;
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

.select-menu {
  display: flex;
  justify-content: center;
}

.img {
  padding-top: 15px;
}
.drop-down {
  border-radius: 10px;
  padding-left: 5px;
}

.catCard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgContainer {
  display: flex;
  justify-content: center;
}

.catImg {
  margin: 20px 20px;
  max-width: 550px;
  max-height: 400px;
  -webkit-box-shadow: 5px 5px 50px 50px rgba(175, 211, 228, 0.7);
  box-shadow: 5px 5px 50px 50px rgba(175, 211, 228, 0.7);
}

.catDetails {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
}

.description {
  font-size: 20px;
}

.wiki {
  text-decoration: none;
  color: white;
  border-radius: 5px;
  background-color: lightcoral;
  padding: 10px 10px;
  cursor: pointer;
}
.wiki:hover {
  transform: translateY(-2px);
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
}
</style>
