<template>
   <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>
          <span>Events</span>
        </h2>
      </div>
 
    <!-- First set of images -->
    <div>
      <h5>Friday Forum-1st march 2024 </h5>
        <h6>Agile Intergration Platform</h6> <!-- Heading for the first set of images -->
      <div class="image-container">
        <img v-for="(imageFilename, index) in imageFilenamesSet1" :key="'set1-' + index" class="custom-image" :src="getImageUrl(imageFilename)" alt="Image" @click="openImageInNewWindow(getImageUrl(imageFilename))" />
      </div>
    </div>
    
    <!-- Second set of images -->
    <div>
      <h5>SLT data centre visit</h5> <!-- Heading for the second set of images -->
      <div class="image-container">
        <img v-for="(imageFilename, index) in imageFilenamesSet2" :key="'set2-' + index" class="custom-image" :src="getImageUrl(imageFilename)" alt="Image" @click="openImageInNewWindow(getImageUrl(imageFilename))" />
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageFilenamesSet1: [  // Array of image filenames for set 1
        '8.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
       
        // Add more image filenames as needed for set 1
      ],
      imageFilenamesSet2: [  // Array of image filenames for set 2
        'event2.jpg',
        
        // Add more image filenames as needed for set 2
      ]
    };
  },
  methods: {
    getImageUrl(filename) {
      return process.env.BASE_URL + filename;
    },
    openImageInNewWindow(imageUrl) {
      // Open the clicked image in a new window
      window.open(imageUrl, '_blank');
    }
  }
};
</script>

<style scoped>
/* Define the style for the image container */
.image-container {
  display: flex; /* Use flexbox to align images horizontally */
  flex-wrap: wrap; /* Allow wrapping to multiple lines if necessary */
  justify-content: left; /* Center-align images */
}

/* Define the style for the custom-image class */
.custom-image {
  width: 250px; /* Set the width of each image */
  height: auto; /* Automatically adjust the height based on the width */
  margin: 5px; /* Add some space between images */
}

</style>
