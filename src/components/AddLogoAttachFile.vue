<template>
    <div class="w-64 p-2 border-iris-blue border-2 border-round border-dashed rounded-lg bg-iris-blue bg-opacity-10">
      <label for="dropzone-file" class="bg-clip-padding">
          <div class="text-center pt-2 pb-3">
            <p class="text-xs font-semibold text-iris-blue">
                Attach your file or drag it here
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />          
       </label>
    </div>
</template>

<style>
  @import '../assets/tailwind.css';  
</style>