<template>
    <div class="bg-white border border-iris-grey-border rounded-md mt-2">
        <div class="grid grid-cols-1 divide-y gap-y-4">
            <!-- Collab space name -->
            <div class="grid grid-cols-8">
                <div class="col-span-2">
                    <h1 class="text-iris-blue text-xl not-italic mt-3 font-semibold">Collab space logo</h1>
                    <p class="text-iris-blue opacity-20 text-sm ">
                        Only filas with extensions PNG, JPG,SVG,PDF- MAX(5MB)
                    </p>
                </div>
                <div class="col-span-6">
                    <div class="flex mt-6 mr-7 ml-12">
                        <input type="text" id="first_name" class="flex-initial w-97 bg-iris-soft  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4  " placeholder="Space name" required>
                        <button type="button" class="flex-initial w-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800   ">
                            <svg aria-hidden="true" class="fill-current bg-iris-green text-iris-white-2 rounded-full mx-2.5  " fill="currentcolor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>   
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
                    <div class="flex gap-2">
                        <AddLogoAttachFile/>

                        <img class="w-14 h-14 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-14 h-14 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
                        <img class="w-14 h-14 rounded" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Default avatar">
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
                    <div class="flex gap-2">   
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-blue"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-pink"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-black"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-blue"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-pink"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="w-10 h-10 rounded bg-iris-black"></div>
                            <p class="text-xs">Yellow</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AddLogoAttachFile from './AddLogoAttachFile';

    export default {
        components: {
            AddLogoAttachFile
        }
    };
</script>

<style>
    @import '../assets/tailwind.css';  
  </style>