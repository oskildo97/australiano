<template>
    <div class="bg-white border border-iris-grey-border rounded-md mt-2">
        <div class="grid grid-cols-1 divide-y">
            <!-- Collab space name -->
            <div class="grid grid-cols-8">
                <div class="col-span-2">
                    <h1>Collab space name</h1>
                    <p>asdas dasdasd asd</p>
                </div>
                <div class="col-span-6">
                    <div class="flex">
                        <input type="text" id="first_name" class="flex-initial w-96 bg-iris-soft border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Space name" required>
                        <button type="button" class="flex-initial w-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </div>   
                </div>
            </div>
            <!-- Collab space logo -->
            <div class="grid grid-cols-8">
                <div class="col-span-2">
                    <h1>Collab space logo</h1>
                    <p>asdas dasdasd asd</p>
                </div>
                <div class="col-span-6">
                    <div class="flex">
                        <div class="flex justify-center items-center w-full">
                            <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div> 

                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                    </div>  
                </div>
            </div>
            <!-- Collab space color -->
            <div class="grid grid-cols-8">
                <div class="col-span-2">
                    <h1>Collab space color</h1>
                    <p>asdas dasdasd asd</p>
                </div>
                <div class="col-span-6">
                    <div class="flex">                        
                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-10 h-10 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import '../assets/tailwind.css';  
  </style>