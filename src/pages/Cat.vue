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
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <SearchDropdown
        :options="cats"
        v-on:selected="onSelectedOption"
        maxItem="10"
        class="drop-down"
      >
      </SearchDropdown>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isLoading: true,
      images: [], //image list for selected cat
      cats: [], //drop down list for cat breeds
      userChoice: {},
      currentImage: {},
    }
  },
  created() {
    this.getCats()
  },
  watch: {
    user_choice: () => {
      this.getImages()
    },
  },
  methods: {
    onSelectedOption(payload) {
      this.userChoice = payload
    },
    async getCats() {
      this.isLoading = true
      try {
        // Swal.fire({
        //   title: 'Getting all cat breeds',
        //   text: 'Please enjoy this cute gif while we are fetching from API...',
        //   position: 'top',
        //   width: 500,
        //   timer: 2000,
        //   padding: '20px',
        //   background: 'lightcyan',
        //   showConfirmButton: false,
        //   backdrop: `
        //               rgba(29, 189, 218,0.8)
        //               url("https://catgifpage.com/wp-content/uploads/2022/06/Where-is-the-ball.gif")
        //               center
        //               no-repeat
        //             `,
        // })
        axios.defaults.headers.common['Authorization'] =
          import.meta.env.VITE_API_KEY
        let response = await axios.get('https://api.thecatapi.com/v1/breeds/')
        this.cats = response.data
        this.userChoice = this.cats[9] //initial start value
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async getImages() {
      this.isLoading = true
      try {
        let params = {
          id: this.userChoice.id,
          limit: 6,
        }
        axios.defaults.headers.common['Authorization'] =
          import.meta.env.VITE_API_KEY
        let response = await axios.get(
          'https://api.thecatapi.com/v1/images/search',
          { params: params }
        )
        this.images = response.data
        this.currentImage = this.images[0]
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

.select-menu {
  display: flex;
  justify-content: center;
}


.drop-down{
  background-color: whitesmoke;
  color: lightblue;
}
</style>
