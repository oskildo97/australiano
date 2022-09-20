<template>
  <div style="width: 50%; margin-left: 10%;" class="mt-4">

    <div class="bg-blue flex justify-center items-center w-full">
  <!-- <div class="bg-clip-padding p-5 bg-iris-blue border-4 border-iris-blue border-round"> -->
        <label for="dropzone-file"> <!--class="bg-clip-padding p-5 bg-violet-600 border-4 border-violet-300 border-dashed"-->
          <div class="flex flex-col justify-center items-center pt-3 pb-3">
              <svg aria-hidden="true" class="mb-8 w-12 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p class="mb-2 text-sm text-gray-500">Add members here - Attachyour file or drag it here</p>
              <p class="font-sans ...">Add members here - Attachyour file or drag it here</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
       </label>
    </div>

  </div>
</template>

<script>
  
</script>

<style>
  @import './assets/tailwind.css';
  
</style>
