<template>
    <div class="bg-white border border-iris-grey-border rounded-md mt-2">
        <div class="grid grid-cols-8 gap-2 mb-4">
            <div class="col-span-2">
                <div class="pl-4">
                    <h1 class="text-iris-blue text-lg not-italic mt-3 font-semibold">
                        Upload terms and conditions of your school
                    </h1>
                    <p class="text-iris-blue opacity-20 text-sm">
                        Here you will be able to upload the necessary documentation accepting the terms and conditions that will be shown to the users in the sign up screen.
                    </p>
                </div>
            </div>
            <div class="col-span-6">
                <div class="grid grid-cols-1">

                    <AddTermsAttachFile />

                    <div class="text-center mr-14">
                        <h1 class="text-iris-blue text-lg mt-4 font-semibold">Or</h1>
                        <p class="text-iris-blue opacity-20 text-sm">
                            paste here your link accepting the terms and conditions
                        </p>
                    </div>

                    <div class="mt-4 mr-14">
                        <div class="flex">
                            <input type="text" id="first_name" class="flex-initial w-96 bg-iris-soft border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Space name" required>
                            <button type="button" class="flex-initial w-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Icon description</span>
                            </button>
                        </div> 
                    </div>

                </div>                
            </div>
        </div>
    </div>
</template>

<script>
    import AddTermsAttachFile from './AddTermsAttachFile.vue';

    export default {
        components: {
            AddTermsAttachFile
        }
    }
</script>
<style>
    @import '../assets/tailwind.css';  
  </style>