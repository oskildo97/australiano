<template>
    <div class="bg-white rounded-lg">
        <!-- Team Owner Information -->
        <div class="col-span-6">
            <h3 class="text-iris-blue">Collab Space Owner</h3>

            <div class="flex items-center mt-2">
                <img class="w-12 h-12 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Team Image">
                <div class="ml-4 leading-tight">
                    <div>Maria Paula</div>
                    <div class="text-gray-700 text-sm">maria@educationtlc.com</div>
                </div>
            </div>
        </div>

        <!-- Team Name -->
        <div class="col-span-6 sm:col-span-4">
            <h3 class="text-iris-blue">Collab Space name</h3>
            <div class="flex">
                <input type="text" id="first_name" class="flex-initial w-96 bg-iris-soft border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Space name" required>
                <button type="button" class="flex-initial w-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Icon description</span>
                </button>
            </div>            
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">create a space</button>
        </div>
    </div>
</template>

<script>
</script>

<style>
    @import '../assets/tailwind.css';  
  </style>