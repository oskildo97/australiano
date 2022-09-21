<template>
    <div class="grid grid-cols-7 gap-6 py-6 px-4 ">
        <div class="col-span-2">
            
            <p class="mt-10 text-4xl font-bold text-iris-blue">Collab space settings</p>
            <div class="my-4">
                <span class="border border-iris-blue text-iris-blue text-sm font-medium px-9 py-1.5 rounded">5 Spaces</span>
            </div>

            <div class="divide-y divide-slate-300"></div>

            <!-- lista desordenada -->
            <ul class="space-y-3" >
                <li>
                    <a href="" class="flex items-center p-3 text-base font-bold text-iris-blue bg-iris-blue bg-opacity-10 rounded-lg hover:bg-opacity-20 group hover:shadow space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
                        <div class="space-y-0.5 font-medium text-left text-xl">
                            <div>TLC</div>
                            <div class="text-sm text-iris-blue">
                                26 Members
                                <button type="button" class="w-2 h-2 mx-2 rounded-full bg-iris-blue"></button>
                                3 Admins
                                <button type="button" class="w-2 h-2 mx-2 rounded-full bg-iris-blue"></button>
                                52 Licenses
                            </div>
                        </div>
                        <button type="button" class="place-self-end pl-3 text-iris-blue bg-iris-white hover:bg-iris-blue 
                                                    hover:text-white focus:ring-4 focus:outline-none focus:iris-white-1
                                                    font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Icon description</span>
                        </button>
                    </a>  
                </li>
            </ul>

        </div>
    </div>
  
</template>

<script>
  
</script>

<style>
  @import './assets/tailwind.css';
  
</style>
