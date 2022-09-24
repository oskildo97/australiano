<template>
    <div class="bg-white rounded-lg">

        <div class="col-span-6 ">
            <h3 class="text-iris-blue p-3 text-2xl font-normal">New space</h3>

            <div class="flex items-center ">
                <img class="w-11 h-11 rounded-full object-cover m-3" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Team Image">
                <div class="ml-1 leading-tight">
                    <div class=" font-bold text-iris-blue text-lg" > You'll  be the owner</div>
                    <div class=" font-  text-gray-700 text-base text-iris-blue">nombre usuario</div>
                </div>
            </div>
        </div>

        <div class="col-span-6 sm:col-span-4">
            
            <div class="flex">
                <input type="text" id="spaceName" 
                                    v-model="form.spaceName"
                                    class="flex-initial w-96 bg-iris-soft text-gray-900 text-sm rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-3" 
                                    placeholder="Space name" required>
                                    
                <button type="button" class="flex-initial w-14 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="fill-current bg-iris-green text-iris-white-2 rounded-full mx-1 " fill="currentcolor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Icon description</span>
                </button>
            </div>            
            <div class="flex justify-center">
                <button type="button"
                        class="text-iris-white-2 bg-iris-blue hover:bg-blue-800 focus:outline-none 
                                            focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 
                                            py-2.5 text-center mr-12 mb-4 ml-12 dark:bg-blue-600 dark:hover:bg-blue-700 
                                            dark:focus:ring-blue-800 m-3 grow h-13 ">
                    create a space
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    spaceName: ''
                }
            }
        },
        methods: 
        {
            // createTeam() {
            //     this.form.post(route('teams.store'), {
            //         errorBag: 'createTeam',
            //         preserveScroll: true
            //     });
            // },
        }
    }
</script>

<style>
    @import '../assets/tailwind.css';  
  </style>