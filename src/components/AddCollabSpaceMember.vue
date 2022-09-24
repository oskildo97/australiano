<template>
    <div class="bg-white border border-iris-grey-border rounded-md mt-2">
        <div class="grid grid-cols-8 gap-2">
            <div class="col-span-2">
                <div class="pl-4">
                    <h1 class="text-iris-blue text-lg not-italic mt-3 font-semibold">
                        Add Collab space member
                    </h1>
                    <p class="text-iris-blue opacity-20 text-sm">
                        Add a new collab space member to your team, allowing them to collaborate with you
                    </p>
                </div>
            </div>
            <div class="col-span-6">
                <div class="flex flex-col divide-y gap-4">
                    <div class="mr-6"> 
                        <p class="text-iris-blue font-semibold text-sm mt-3">
                            Please provide the email addres of the person yoy would like to add to this space
                        </p>
                        <div class="mt-4">   
                            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="mt-3 text-iris-blue">
                            <span>Members</span>
                            <span class="opacity-30">(56)</span>
                        </p>
                        <div class="grid grid-cols-1">
                            <div class="flex flex-wrap gap-4 my-4">
                                <div class="">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Team Image">
                                </div>
                                <div class="flex-auto">
                                    <div>Collab space owner(TLC)</div>
                                    <div class="text-gray-700 text-sm">Juan Steban </div>
                                </div>
                                <button type="button" class="text-iris-blue hover:text-white border border-iris-blue 
                                                             hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                                             font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Save changes
                                </button>
                                <!-- <div class="rounded-full border border-iris-blue py-2 px-4 bg-iris-blue opacity-10">
                                    <button class="hover:bg-blue-700 font-bold">
                                        <span class="text-iris-blue text-opacity-100">
                                            Save changes
                                        </span>                    
                                    </button>
                                </div> -->
                                <div class="">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
</template>

<style>
    @import '../assets/tailwind.css';  
  </style>